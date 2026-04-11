export type Project = {
  title: string;
  image: string;
  description: string;
  tags: string[];
  github?: string;
  article?: string;
  website?: string;
};

export const projects: Project[] = [
  {
    title: "File converter",
    image: "/file_converter.PNG",
    description:
      "A powerful, modern web application built with Django that converts files between multiple formats. Features real-time progress updates via WebSockets, asynchronous processing with Celery, and a responsive UI.",
    tags: ["Django", "Celery", "WebSockets"],
    github: "https://github.com/MucyoKevin/file_converter.git",
  },
  {
    title: "Lumora landing page",
    image: "/Lumora.PNG",
    description:
      "Marketing landing page for a luxury candle brand, built with Vue.js and Tailwind CSS.",
    tags: ["Vue.js", "Tailwind CSS"],
    github: "https://github.com/MucyoKevin/lumora-scents-landing-page",
    website: "https://lumora-scents-landing-page.vercel.app/",
  },
  {
    title: "Personal Finance Tracker",
    image: "/PersonalFinanceTracker.JPG",
    description:
      "A web application for managing personal finances, built with ASP.NET Core and Entity Framework Core.",
    tags: ["ASP.NET Core", "C#"],
    github: "https://github.com/MucyoKevin/personal-finance-tracker",
  },
  {
    title: "Automated Weather Data Pipeline",
    image: "/datapipeline.webp",
    description:
      "This project implements a complete ETL pipeline for weather data.",
    tags: ["Python", "Supabase"],
    github: "https://github.com/MucyoKevin/weather-data-ETL-pipeline",
    article:
      "https://medium.com/@mucyocyeve22/building-an-automated-weather-data-pipeline-from-api-to-interactive-visualizations-989f13de851c",
  },
  {
    title: "Analysing and Predicting CO2 Emissions in Rwanda",
    image: "/CO2emissionvisualisation.webp",
    description:
      "This project analyzes RwandaCO2Emissions dataset from kaggle using Python, providing interactive visualizations and statistical analysis of CO2 emissions across Rwanda.",
    tags: ["Python", "Colab Notebook"],
    github: "https://github.com/MucyoKevin/CO2-emission-project",
    article:
      "https://medium.com/@mucyocyeve22/analysing-and-predicting-co2-emissions-in-rwanda-a-data-driven-approach-74138200dfed",
  },
  {
    title: "A Comparative Study of ARIMA, SARIMA, and LSTM Models",
    image: "/comparisontable.webp",
    description:
      "This project demonstrated that SARIMA outperforms ARIMA and LSTM for forecasting Romania's energy consumption.",
    tags: ["Python", "Colab Notebook"],
    github: "https://github.com/MucyoKevin/energy-prediction-system",
    article:
      "https://medium.com/@mucyocyeve22/forecasting-energy-consumption-a-comparative-study-of-arima-sarima-and-lstm-models-9b77e934014d",
  },
  {
    title: "Analysing Car Sales Data",
    image: "/carsales.webp",
    description:
      "This project explores key insights, data cleaning techniques, and visualization strategies that can help businesses analyze sales performance and identify trends.",
    tags: ["MS Excel", "Power BI"],
    github: "https://github.com/MucyoKevin/sales-performance-analysis",
    article:
      "https://medium.com/@mucyocyeve22/analysing-car-sales-data-insights-from-a-power-bi-dashboard-12a50c2f852b",
  },
  {
    title: "Ragdoll logistics",
    image: "/ragdoll.PNG",
    description:
      "A professional truck dispatch company site: trucking services and competitive freight rates for truckers.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/MucyoKevin/ragdoll",
    website: "https://ragdoll-gamma.vercel.app/",
  },
];
