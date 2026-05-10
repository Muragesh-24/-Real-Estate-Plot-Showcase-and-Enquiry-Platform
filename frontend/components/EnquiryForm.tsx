"use client";

import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

type EnquiryFormProps = {
  interestOptions?: string[];
};

export default function EnquiryForm({ interestOptions = [] }: EnquiryFormProps) {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!turnstileToken) {
      setStatusMessage("Please complete the verification.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: String(formData.get("fullName") ?? ""),
      phoneNumber: String(formData.get("phoneNumber") ?? ""),
      email: String(formData.get("email") ?? ""),
      interestedIn: String(formData.get("interestedIn") ?? ""),
      purpose: String(formData.get("purpose") ?? ""),
      preferredDate: String(formData.get("preferredDate") ?? ""),
      message: String(formData.get("message") ?? ""),
      turnstileToken,
    };

    try {
      setIsSubmitting(true);
      setStatusMessage(null);

      const res = await fetch(process.env.NEXT_PUBLIC_ENQUIRY_API_URL!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatusMessage(data.message || "Something went wrong. Please try again.");
        return;
      }

      form.reset();
      setTurnstileToken(null);
      setStatusMessage("Thank you! We will contact you soon.");
    } catch (error) {
      console.error(error);
      setStatusMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="grid gap-8 rounded-[2rem] border border-white/80 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] lg:grid-cols-[0.85fr_1.15fr] lg:p-8">
      <div className="space-y-4 rounded-[1.5rem] bg-gradient-to-br from-slate-900 to-emerald-800 p-6 text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Enquiry form</p>
        <h2 className="text-3xl font-semibold tracking-tight">Send an enquiry or request a site visit</h2>
        <p className="text-sm leading-7 text-white/80">
          Capture interest quickly with a simple form connected to secure serverless backend.
        </p>
        <div className="space-y-3 text-sm text-white/80">
          <p>• Pricing details</p>
          <p>• Site visit scheduling</p>
          <p>• Callback requests</p>
          <p>• General enquiries</p>
        </div>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {statusMessage ? (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
            {statusMessage}
          </div>
        ) : null}

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-700">Full Name</span>
            <input
              name="fullName"
              required
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
              placeholder="Enter your full name"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-700">Phone Number</span>
            <input
              name="phoneNumber"
              required
              inputMode="tel"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
              placeholder="Enter your phone number"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-700">Email</span>
            <input
              name="email"
              type="email"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
              placeholder="Optional email"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-700">Interested Plot/Layout</span>
            <select
              name="interestedIn"
              defaultValue=""
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
            >
              <option value="">Select a plot or layout</option>
              {interestOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-700">Purpose</span>
            <select
              name="purpose"
              defaultValue="Site Visit"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
            >
              <option>Site Visit</option>
              <option>Pricing Details</option>
              <option>Callback</option>
              <option>General Enquiry</option>
            </select>
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-700">Preferred Date</span>
            <input
              name="preferredDate"
              type="date"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
            />
          </label>
        </div>

        <label className="block space-y-2">
          <span className="text-sm font-medium text-slate-700">Message</span>
          <textarea
            name="message"
            rows={5}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
            placeholder="Tell us what you need, your preferred location, budget, or any questions you have."
          />
        </label>

        <Turnstile
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
          onSuccess={(token) => setTurnstileToken(token)}
          onError={() => setTurnstileToken(null)}
          onExpire={() => setTurnstileToken(null)}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {isSubmitting ? "Submitting..." : "Submit Enquiry"}
        </button>
      </form>
    </div>
  );
}

// + Cloudflare Turnstile
// + Lambda Function URL
// + SES
// + DynamoDB rate limit
// + strict validation