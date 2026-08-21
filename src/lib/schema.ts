import { products } from "@/data/products";
import { projects } from "@/data/projects";
import { workExperience } from "@/data/work-experience";
import { absoluteUrl, getSiteUrl } from "@/lib/site";

/**
 * Structured data for the site, assembled as a linked `@graph` per page.
 *
 * Everything is addressed by `@id` so the Person, the WebSite and each WebPage
 * are stated once and referenced afterwards. That is what lets Google collapse
 * the whole site into a single entity — the knowledge-panel path for a personal
 * site — rather than reading eight unrelated pages that happen to share a name.
 */

type Node = Record<string, unknown>;

const PERSON_ID = "#person";
const WEBSITE_ID = "#website";

export const person = {
  name: "Mucyo Kevin",
  jobTitle: "Full Stack Developer",
  email: "mucyocyeve22@gmail.com",
  telephone: "+250798380103",
  locality: "Kigali",
  country: "RW",
  image: "/profile3.JPG",
  profiles: [
    "https://github.com/MucyoKevin",
    "https://www.linkedin.com/in/mucyo-kevin-140503375",
    "https://medium.com/@mucyocyeve22",
  ],
} as const;

const KNOWS_ABOUT = [
  "Full stack development",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Django",
  "Flask",
  "C#",
  "ASP.NET Core",
  "Vue.js",
  "REST API design",
  "SQL and NoSQL databases",
  "Data analysis",
  "Data visualization",
  "Cloud-native deployment",
  "Embedded systems",
];

function id(fragment: string) {
  return `${getSiteUrl()}/${fragment.replace(/^\/+/, "")}`;
}

/** The one canonical description of Mucyo Kevin; everything else points at it. */
export function personNode(): Node {
  return {
    "@type": "Person",
    "@id": id(PERSON_ID),
    name: person.name,
    givenName: "Kevin",
    familyName: "Mucyo",
    jobTitle: person.jobTitle,
    description:
      "Full stack developer in Kigali, Rwanda, building web platforms across JavaScript, Python and C# — currently CTO at GC Technologies and StroomUp.",
    url: absoluteUrl("/"),
    image: absoluteUrl(person.image),
    email: `mailto:${person.email}`,
    telephone: person.telephone,
    address: {
      "@type": "PostalAddress",
      addressLocality: person.locality,
      addressCountry: person.country,
    },
    knowsLanguage: ["en", "rw", "fr"],
    knowsAbout: KNOWS_ABOUT,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Jomo Kenyatta University of Agriculture and Technology",
    },
    worksFor: workExperience
      .filter((entry) => entry.period.toLowerCase().includes("present"))
      .map((entry) => ({ "@type": "Organization", name: entry.company })),
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Developer",
      occupationLocation: { "@type": "City", name: "Kigali" },
      skills: KNOWS_ABOUT.join(", "),
    },
    sameAs: [...person.profiles],
  };
}

export function websiteNode(): Node {
  return {
    "@type": "WebSite",
    "@id": id(WEBSITE_ID),
    url: absoluteUrl("/"),
    name: `${person.name} — ${person.jobTitle}`,
    description:
      "Portfolio of Mucyo Kevin, a full stack developer in Kigali, Rwanda.",
    inLanguage: "en",
    publisher: { "@id": id(PERSON_ID) },
    copyrightHolder: { "@id": id(PERSON_ID) },
  };
}

type PageOptions = {
  path: string;
  name: string;
  description: string;
  /** Defaults to WebPage; pass a more specific type where one fits. */
  type?:
    | "WebPage"
    | "AboutPage"
    | "ContactPage"
    | "ProfilePage"
    | "CollectionPage";
  dateModified?: string;
};

function webPageNode({
  path,
  name,
  description,
  type = "WebPage",
  dateModified,
}: PageOptions): Node {
  return {
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { "@id": id(WEBSITE_ID) },
    about: { "@id": id(PERSON_ID) },
    inLanguage: "en",
    ...(path === "/" ? { primaryImageOfPage: absoluteUrl(person.image) } : {}),
    ...(dateModified ? { dateModified } : {}),
  };
}

/**
 * Home is always the first crumb; a single-level site needs nothing deeper.
 * Google renders this as the breadcrumb line under the result title.
 */
function breadcrumbNode(path: string, label: string): Node | null {
  if (path === "/") return null;
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(path)}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      {
        "@type": "ListItem",
        position: 2,
        name: label,
        item: absoluteUrl(path),
      },
    ],
  };
}

/** The commercial platforms, as an ordered list of real applications. */
export function productsListNode(): Node {
  return {
    "@type": "ItemList",
    "@id": `${absoluteUrl("/products")}#products`,
    name: "Products built and led by Mucyo Kevin",
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: product.name,
        alternateName: product.tagline,
        description: product.description,
        url: product.url,
        image: absoluteUrl(product.logo),
        applicationCategory: "WebApplication",
        operatingSystem: "Web",
        author: { "@id": id(PERSON_ID) },
        creator: { "@id": id(PERSON_ID) },
        keywords: product.stack.join(", "),
        ...(product.org
          ? {
              publisher: {
                "@type": "Organization",
                name: product.org.name,
                url: product.org.url,
              },
            }
          : {}),
      },
    })),
  };
}

/** Personal and learning work — source code and write-ups rather than products. */
export function projectsListNode(): Node {
  return {
    "@type": "ItemList",
    "@id": `${absoluteUrl("/projects")}#projects`,
    name: "Projects by Mucyo Kevin",
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": project.github ? "SoftwareSourceCode" : "CreativeWork",
        name: project.title,
        description: project.description,
        image: absoluteUrl(project.image),
        author: { "@id": id(PERSON_ID) },
        keywords: project.tags.join(", "),
        ...(project.github
          ? {
              codeRepository: project.github,
              programmingLanguage: project.tags,
            }
          : {}),
        ...(project.website ?? project.article
          ? { url: project.website ?? project.article }
          : {}),
      },
    })),
  };
}

/** Roles held — the machine-readable twin of the experience page. */
export function experienceListNode(): Node {
  return {
    "@type": "ItemList",
    "@id": `${absoluteUrl("/experience")}#roles`,
    name: "Work experience of Mucyo Kevin",
    numberOfItems: workExperience.length,
    itemListElement: workExperience.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "OrganizationRole",
        roleName: entry.role,
        description: entry.highlights[0],
        memberOf: { "@type": "Organization", name: entry.company },
      },
    })),
  };
}

/** Degree and certificates, as credentials rather than prose. */
export function credentialsNodes(): Node[] {
  return [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Bachelor of Science in Telecommunication and Information Engineering",
      credentialCategory: "degree",
      educationalLevel: "Bachelor of Science",
      recognizedBy: {
        "@type": "CollegeOrUniversity",
        name: "Jomo Kenyatta University of Agriculture and Technology",
      },
      about: { "@id": id(PERSON_ID) },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Programming Essentials in Python",
      credentialCategory: "certificate",
      recognizedBy: {
        "@type": "Organization",
        name: "OpenEDG Python Institute",
      },
      about: { "@id": id(PERSON_ID) },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Google Data Analytics Professional Certificate",
      credentialCategory: "certificate",
      recognizedBy: { "@type": "Organization", name: "Coursera" },
      about: { "@id": id(PERSON_ID) },
    },
  ];
}

/**
 * Build the `@graph` for one page: the shared Person and WebSite, this page,
 * its breadcrumb, and whatever page-specific nodes are passed in.
 */
export function pageGraph(
  page: PageOptions & { label: string },
  extra: Node[] = [],
) {
  const crumb = breadcrumbNode(page.path, page.label);
  return {
    "@context": "https://schema.org",
    "@graph": [
      personNode(),
      websiteNode(),
      webPageNode(page),
      ...(crumb ? [crumb] : []),
      ...extra,
    ],
  };
}
