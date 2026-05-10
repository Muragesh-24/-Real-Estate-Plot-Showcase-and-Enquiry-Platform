export type Project = {
  name: string;
  location: string;
  year: string;
  images: string[];
  description: string;
};

export const projects: Project[] = [
  {
    name: "RTO Layout",
    location: "Behaind RTO Office",
    year: "2014",
    images: ["/assets/projects/project-1.jpg", "/assets/projects/project-1b.jpg"],
    description: "Completed residential layout work with a clean internal road plan and a strong focus on site readiness.",
  },
  {
    name: "Kunchanuru road Layout",
    location: "Kunchanuru Approach Road",
    year: "2016",
    images: ["/assets/projects/project-2.jpg", "/assets/projects/project-2b.jpg"],
    description: "A completed development work package built for practical residential demand and visible accessibility.",
  },
  {
    name: "Hunnuru Layout 1",
    location: "Near Sai Sankhlpa school, Hunnuru",
    year: "2017",
    images: ["/assets/projects/project-3.jpg", "/assets/projects/project-3b.jpg"],
    description: "Past real estate development work with layout preparation, road shaping, and residential planning support.",
  },
  {
    name: "Jagajyoti Layout",
    location: "Near Sai Sankhlpa school, Hunnuru",
    year: "2018",
    images: ["/assets/projects/project-4.jpg", "/assets/projects/project-4b.jpg"],
    description: "A completed development showcase demonstrating local delivery, planning discipline, and customer focus.",
  },
];