export type WorkExperience = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export const workExperience: WorkExperience[] = [
  {
    company: "GC Technologies",
    role: "Chief Technology Officer (CTO)",
    period: "October 2025 – Present",
    highlights: [
      "Defined and executed the overall technology strategy and architecture for GC Builds, a construction and project management platform, leading development from concept to production.",
      "Oversaw the design and scaling of backend infrastructure to support project tracking, task management, and team collaboration across complex construction workflows.",
      "Directed frontend development using React/Next.js, ensuring a responsive, user-friendly experience across web and mobile platforms.",
      "Architected RESTful APIs to power core features including project pipelines, resource allocation, and real-time progress updates.",
      "Established engineering standards, development workflows, and best practices to ensure code quality, security, and consistent delivery across the team.",
      "Implemented secure authentication and role-based access control (RBAC) to govern permissions for contractors, clients, and administrators.",
      "Collaborated directly with business stakeholders to align technical decisions with company goals, driving product iterations based on user feedback and market needs.",
    ],
  },
  {
    company: "StroomUp",
    role: "Chief Technology Officer (CTO)",
    period: "June 2025 – Present",
    highlights: [
      "Defined and executed the overall technology strategy and architecture for a social media platform, overseeing development of scalable backend infrastructure using Django to support real-time interactions and content management.",
      "Directed the implementation of comprehensive user authentication and authorization systems, ensuring secure API endpoints for seamless mobile and web integration.",
      "Led the development of live streaming capabilities with real-time video processing and content delivery, enabling users to broadcast and interact with live content.",
      "Architected RESTful APIs to power core social features including user profiles, content feeds, real-time notifications, and streaming functionalities.",
      "Established security protocols including JWT tokens, password hashing, and role-based access control (RBAC), governing permissions across the platform.",
      "Drove technical decision-making and established engineering best practices, overseeing the complete backend architecture from conception to production-ready state.",
    ],
  },
  {
    company: "MTN Rwanda",
    role: "Data Analysis Intern",
    period: "March 2023 – May 2023",
    highlights: [
      "Developed and deployed a Grafana-based dashboard for visualizing real-time data from MTN Rwanda's network operations.",
      "Integrated data sources and configured Grafana to surface critical metrics including network performance, uptime, and error rates.",
      "Collaborated with the data engineering team to keep pipelines accurate and to build custom visualizations tailored to operations needs.",
      "Delivered actionable insights through data visualization to support decision-making and operational efficiency.",
      "Implemented a dynamic, user-friendly dashboard that improved monitoring efficiency for the operations team.",
      "Reduced troubleshooting time by presenting clear visual representations of network health and performance.",
    ],
  },
  {
    company: "Rwanda Airport Company",
    role: "IT intern",
    period: "January 2022 – March 2022",
    highlights: [
      "Supported IT operations by maintaining and troubleshooting network infrastructure across the airport.",
      "Worked with the IT team to monitor network performance and respond to incidents, minimizing disruption to airport operations.",
      "Applied best practices for large-scale network management and IT security in a critical infrastructure environment.",
    ],
  },
];
