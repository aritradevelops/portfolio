import { createMcpHandler } from "mcp-handler";
import { DATA } from "@/data/resume";

export const dynamic = "force-dynamic";

const json = (data: unknown) => ({
  content: [{ type: "text" as const, text: JSON.stringify(data, null, 2) }],
});

const handler = createMcpHandler((server) => {
  server.tool(
    "get_basic_info",
    "Get Aritra Sadhukhan's basic profile info: name, current role/description, location, bio summary, portfolio URL, and resume download link.",
    {},
    async () =>
      json({
        name: DATA.name,
        description: DATA.description,
        summary: DATA.summary,
        location: DATA.location,
        locationLink: DATA.locationLink,
        url: DATA.url,
        resumeUrl: `${DATA.url}${DATA.resumeUrl}`,
      })
  );

  server.tool(
    "get_skills",
    "Get the list of technical skills, languages, frameworks, and tools Aritra Sadhukhan works with.",
    {},
    async () => json({ skills: DATA.skills })
  );

  server.tool(
    "get_work_experience",
    "Get Aritra Sadhukhan's work experience history, including company, title, dates, location, and responsibilities/achievements for each role.",
    {},
    async () =>
      json({
        work: DATA.work.map((job) => ({
          company: job.company,
          href: job.href,
          title: job.title,
          location: job.location,
          start: job.start,
          end: job.end,
          description: job.description,
        })),
      })
  );

  server.tool(
    "get_education",
    "Get Aritra Sadhukhan's educational background, including schools, degrees, and dates attended.",
    {},
    async () =>
      json({
        education: DATA.education.map((edu) => ({
          school: edu.school,
          href: edu.href,
          degree: edu.degree,
          start: edu.start,
          end: edu.end,
        })),
      })
  );

  server.tool(
    "get_projects",
    "Get personal/side projects Aritra Sadhukhan has built, including descriptions, technologies used, and links to live demos or source code.",
    {},
    async () =>
      json({
        projects: DATA.projects.map((project) => ({
          title: project.title,
          href: project.href,
          dates: project.dates,
          active: project.active,
          description: project.description,
          technologies: project.technologies,
          links: project.links.map((link) => ({
            type: link.type,
            href: link.href,
          })),
        })),
      })
  );

  server.tool(
    "get_open_source_contributions",
    "Get open source contributions Aritra Sadhukhan has made to external projects, including hacktoberfest/oss.gg participation, what was contributed, and links to the pull requests.",
    {},
    async () =>
      json({
        contributions: DATA.contributions.map((c) => ({
          title: c.title,
          year: c.year,
          events: c.events,
          description: c.description,
          links: (c.links ?? []).map((link) => ({
            title: link.title,
            href: link.href,
          })),
        })),
      })
  );

  server.tool(
    "get_awards",
    "Get awards and recognitions Aritra Sadhukhan has received.",
    {},
    async () =>
      json({
        awards: DATA.awards.map((award) => ({
          title: award.title,
          issuer: award.issuer,
          date: award.date,
          href: award.href,
        })),
      })
  );

  server.tool(
    "get_certifications",
    "Get professional certifications Aritra Sadhukhan has earned, including issuer, issue date, and a link to verify the certificate.",
    {},
    async () =>
      json({
        certifications: DATA.certifications.map((cert) => ({
          title: cert.title,
          issuer: cert.issuer,
          issueDate: cert.issueDate,
          certificateLink: cert.certificateLink,
        })),
      })
  );

  server.tool(
    "get_contact_info",
    "Get ways to contact or find Aritra Sadhukhan online: email and social profile links (GitHub, LinkedIn, etc).",
    {},
    async () =>
      json({
        email: DATA.contact.email,
        social: Object.values(DATA.contact.social)
          .filter((s) => s.navbar)
          .map((s) => ({ name: s.name, url: s.url })),
      })
  );
},
{
  serverInfo: { name: "aritra-sadhukhan-portfolio", version: "1.0.0" },
},
{
  disableSse: true,
  verboseLogs: false,
});

export { handler as GET, handler as POST, handler as DELETE };
