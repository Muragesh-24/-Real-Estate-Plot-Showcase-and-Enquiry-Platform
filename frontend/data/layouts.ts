export type Layout = {
  name: string;
  location: string;
  totalPlots: number;
  availablePlots: number;
  amenities: string[];
  image: string;
  status: string;
  description: string;
};

export const layouts: Layout[] = [
  {
    name: "Chennamma Layout",
    location: "Behaind Banahatti bus stop",
    totalPlots: 42,
    availablePlots: 16,
    amenities: ["Drainage", "Wide Roads", "Street Lighting", "Water Lines"],
    image: "/assets/layouts/topview.png",
    status: "Under Development",
    description: "A family focused layout with practical plot sizes and planning designed for comfortable residential living.",
  }
];