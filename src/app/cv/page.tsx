import { siteConfig } from "@/config/site.config";
import type { Metadata } from "next";
import { Fragment } from "react";

// CV Data
const CV_DATA = {
  header: {
    name: "VO NGOC QUANG MINH",
    contacts: [
      { text: "vnqminh0502@gmail.com", href: "mailto:vnqminh0502@gmail.com" },
      { text: "linkedin.com/in/minhvoomega", href: "https://linkedin.com/in/minhvoomega" },
      { text: "github.com/MinhOmega", href: "https://github.com/MinhOmega" },
      { text: "Hue", href: "#" },
      { text: "083-555-9175", href: "tel:083-555-9175" },
    ]
  },
  experience: {
    company: {
      name: "Company SNAPTEC VIETNAM",
      role: "Front-end Engineer", 
      period: "Sep. '19 — Present",
      projects: [
        {
          name: "SaaS Theme",
          description: "Developed a customizable website solution, enabling users to tailor design and functionality, including translations, icons, and more.",
          technologies: "Javascript, NextJS, Redux, AWS (S3, Map)",
          responsibilities: [
            "Mentored juniors, conducted code reviews, and consulted on system improvements.",
            "Designed dynamic components and integrated country-specific payment methods.",
            "Enhanced performance with code splitting, lazy loading, and caching."
          ],
          achievement: "Achieved A scores on GTmetrix (occasionally a B score during high traffic periods), improving load speed and reducing data transfer"
        },
        {
          name: "MID Dashboard",
          description: "Admin dashboard for simplified website configurations, reducing dependency on Magento admin.",
          technologies: "JavaScript, NextJS, Redux, AWS (S3, Map, AppSync)",
          responsibilities: [
            "Designed core UI components and migrated Magento functions to a new interface.",
            "Improved UX and transitioned from REST APIs to GraphQL via AWS AppSync."
          ]
        },
        {
          name: "PWA Magento",
          description: "Customized an e-commerce site using Magento's PWA studio.",
          technologies: "JavaScript, React, Redux",
          responsibilities: [
            "Maintained and enhanced features based on client requirements.",
            "Researched and implemented optimizations to improve developer and user experiences."
          ]
        }
      ]
    },
    freelance: [
      {
        name: "Instasalon Freelance",
        period: "Aug. '21 — Nov. '23",
        description: "Developed a scheduling and management system for nail salons in the US.",
        technologies: "TypeScript, JavaScript, React Native, Redux, Firebase",
        responsibilities: [
          "Designed responsive UX/UI for tablet devices based on Figma prototypes.",
          "Added features: real-time chat, appointment scheduling, drag-and-drop, in-app purchases, and offline capabilities.",
          "Published apps on Google Play and AppStore, resolving rejections."
        ]
      },
      {
        name: "Personal SaaS",
        period: "May '24 — Present",
        description: "E-commerce and sales management platform for SMBs.",
        technologies: "TypeScript, Next.js, MongoDB, Prisma ORM, Redux, TailwindCSS, Docker",
        responsibilities: [
          "Built a Next.js 14 platform with server-side rendering and static generation.",
          "Developed responsive UI with TailwindCSS, animations, and form validation."
        ]
      }
    ]
  },
  skills: [
    { category: "Languages", items: "JavaScript, TypeScript, GraphQL" },
    { category: "Framework", items: "NextJS, React Native, Redux, Taiwind CSS, SCSS, styled-components" },
    { category: "Software", items: "Atlassian (Jira, Confluence), Figma, Android studio, VSCode, Git" }
  ],
  education: {
    school: "Hue University of Sciences",
    degree: "Bachelor degree - Software Engineering",
    period: "2016 - 2020"
  },
  reward: {
    title: "SNAPTEC - HERO OF THE YEARS",
    date: "Aug. '21"
  }
};

export async function generateMetadata(): Promise<Metadata> {
  const ogUrl = new URL(`${siteConfig.siteUrl}/og`);
  ogUrl.searchParams.set("heading", "Curriculum Vitae");
  ogUrl.searchParams.set("type", "CV");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: `CV | ${siteConfig.name}`,
    description: "Front-end Engineer with expertise in React, Next.js, and modern web technologies",
    keywords: ["Front-end Engineer", "React", "Next.js", "JavaScript", "TypeScript", "Web Development"],
    authors: [{ name: "VO NGOC QUANG MINH" }],
    openGraph: {
      title: `CV | ${siteConfig.name}`,
      description: "Front-end Engineer with expertise in React, Next.js, and modern web technologies",
      type: "article",
      url: `${siteConfig.siteUrl}/cv`,
      images: [{ url: ogUrl.toString(), width: 1200, height: 630, alt: "CV" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `CV | ${siteConfig.name}`,
      description: "Front-end Engineer with expertise in React, Next.js, and modern web technologies",
      images: [ogUrl.toString()],
    },
  };
}

const ProjectSection = ({ project }: { project: typeof CV_DATA.experience.company.projects[0] }) => (
  <div className="mb-4">
    <h4 className="font-semibold">Project: {project.name}</h4>
    <ul className="list-disc ml-4 md:ml-6 space-y-1" role="list">
      <li><span className="font-medium">Description:</span> {project.description}</li>
      <li><span className="font-medium">Technologies:</span> {project.technologies}</li>
      <li>
        <span className="font-medium">Responsibilities:</span>
        <ul className="list-circle ml-4 md:ml-6" role="list">
          {project.responsibilities.map((resp, idx) => (
            <li key={idx}>{resp}</li>
          ))}
        </ul>
      </li>
      {project.achievement && (
        <li><span className="font-medium">Achievement:</span> {project.achievement}</li>
      )}
    </ul>
  </div>
);

const FreelanceSection = ({ project }: { project: typeof CV_DATA.experience.freelance[0] }) => (
  <div>
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
      <h4 className="font-semibold">Project: {project.name}</h4>
      <span className="text-sm text-muted-foreground">{project.period}</span>
    </div>
    <ul className="list-disc ml-4 md:ml-6 space-y-1" role="list">
      <li><span className="font-medium">Description:</span> {project.description}</li>
      <li><span className="font-medium">Technologies:</span> {project.technologies}</li>
      <li>
        <span className="font-medium">Responsibilities:</span>
        <ul className="list-circle ml-4 md:ml-6" role="list">
          {project.responsibilities.map((resp, idx) => (
            <li key={idx}>{resp}</li>
          ))}
        </ul>
      </li>
    </ul>
  </div>
);

export default function CVPage() {
  return (
    <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8" role="main">
      {/* Header */}
      <header className="text-center space-y-4">
        <h1 className="text-2xl sm:text-3xl font-bold">{CV_DATA.header.name}</h1>
        <nav className="text-sm text-muted-foreground flex flex-wrap justify-center gap-y-2" aria-label="Contact information">
          {CV_DATA.header.contacts.map((contact, idx) => (
            <Fragment key={idx}>
              {idx > 0 && <span className="mx-2" aria-hidden="true">•</span>}
              <a 
                href={contact.href}
                target={contact.href.startsWith('http') ? "_blank" : undefined}
                rel={contact.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary inline-block"
                aria-label={`Contact via ${contact.text}`}
              >
                {contact.text}
              </a>
              {idx === 2 && <div className="basis-full hidden sm:block" />}
            </Fragment>
          ))}
        </nav>
      </header>

      {/* Work Experience */}
      <section aria-labelledby="work-experience">
        <h2 id="work-experience" className="text-xl font-bold border-b pb-1 mb-6">Work Experience</h2>
        <div className="space-y-8">
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
              <h3 className="font-bold">{CV_DATA.experience.company.name}</h3>
              <span className="text-sm text-muted-foreground">{CV_DATA.experience.company.period}</span>
            </div>
            <div className="italic mb-4">{CV_DATA.experience.company.role}</div>
            {CV_DATA.experience.company.projects.map((project, idx) => (
              <ProjectSection key={idx} project={project} />
            ))}
          </div>

          {CV_DATA.experience.freelance.map((project, idx) => (
            <FreelanceSection key={idx} project={project} />
          ))}
        </div>
      </section>

      {/* Skills */}
      <section aria-labelledby="skills">
        <h2 id="skills" className="text-xl font-bold border-b pb-1 mb-6">Skills</h2>
        <div className="space-y-3">
          {CV_DATA.skills.map((skill, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row gap-1">
              <span className="font-medium min-w-[100px]">{skill.category}:</span>
              <span>{skill.items}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section aria-labelledby="education">
        <h2 id="education" className="text-xl font-bold border-b pb-1 mb-6">Education</h2>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
          <div>
            <h3 className="font-bold">{CV_DATA.education.school}</h3>
            <div className="italic">{CV_DATA.education.degree}</div>
          </div>
          <span className="text-sm text-muted-foreground">{CV_DATA.education.period}</span>
        </div>
      </section>

      {/* Reward */}
      <section aria-labelledby="reward">
        <h2 id="reward" className="text-xl font-bold border-b pb-1 mb-6">Reward</h2>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
          <h3 className="font-bold">{CV_DATA.reward.title}</h3>
          <span className="text-sm text-muted-foreground">{CV_DATA.reward.date}</span>
        </div>
      </section>
    </article>
  );
}
