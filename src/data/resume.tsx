import { ContributionDetails } from "@/components/contribution-card";
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aritra Sadhukhan",
  initials: "AS",
  url: "https://swiftgeek.in",
  location: "West Bengal, IN",
  locationLink: "https://www.google.com/maps/place/Naihati/data=!4m2!3m1!1s0x39f896a1910e4387:0xe762ecc698e4c859?sa=X&ved=1t:155783&ictx=111",
  description:
    "Backend Engineer who loves building scalable systems and developer tools.",
  summary:
    "I started my journey in [Electrical Engineering](#education), but somewhere between the realm of circuits and transistors, I stumbled upon programming — and it completely changed my path. What began as a small curiosity during my Higher Secondary days quickly turned into a full-blown passion. I started learning web development, and before I knew it, I was deep into [building products](#work), [solving tough engineering challenges](#projects), and [contributing to open source](#contributions). To know the science behind what I was building, I later pursued a [B.Tech in Computer Science](#education), which helped me bridge the gap between practical development and core computing concepts.",
  avatarUrl: "/me.jpeg",
  skills: [
    "Node.js",
    "Typescript",
    "Go",
    "Python",
    "MongoDB",
    "Postgres",
    "Docker",
    "Kafka",
    "Kubernetes",
    "Nginx",
    "Redis",
    "WebSocket",
    "WebRTC",
    "gRPC",
    "Linux",
    "AWS S3",
    "AWS EC2",
    "AWS ECS",
    "OCI",
    "Locust"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://medium.com/@aritrasadhukhan430", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "aritrasadhukhan430@gmail.com",
    tel: "0000000000000",
    social: {
      Email: {
        name: "Email",
        url: "mailto:aritrasadhukhan430",
        icon: Icons.email,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/aritradevelops",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aritra-sadhukhan",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "CodeClouds",
      href: "https://www.codeclouds.com/",
      badges: [],
      location: "New Town, WB, IN",
      title: "Engineer Web",
      logoUrl: "/codeclouds.jpeg",
      start: "June 2022",
      end: "Present",
      description:
        `
  - Designed and developed backend microservices for modern SaaS products using **Golang, Node.js, TypeScript, Kafka, Redis, MongoDB and PostgreSQL**, handling high concurrency and computation-heavy request paths in shared environments.

  - Built a scalable theme rendering pipeline leveraging **CDN offloading**, **Redis-based precomputation**, **in-memory size-based LRU caching**, and **sticky sessions**, significantly reducing render latency and cache misses.

  - Designed a provider-based architecture using **interfaces and factory patterns** to support multiple CRMs and e-commerce platforms, enabling seamless addition of new integrations without modifying existing production code.
  - Developed a custom **HTML comment and data-attribute-based templating language** to inject dynamic runtime data into static templates without impacting HTML structure or performance.
  - Created an internal backend framework and CLI to auto-generate production-ready **CRUD services** with built-in authentication (JWT), authorization, Kafka integration, logging, querying, and i18n—improving developer productivity and consistency.

  - Architected a secure **plugin-based backend framework** for the Simplified HR Marketplace, enabling sandboxed third-party extensions with controlled permissions and event-driven lifecycle hooks.

  - Implemented a fault-tolerant leave crediting system using **schedulers, Google Cloud Tasks, and worker pools**, with retries, fallbacks, and alerting to handle large employee datasets reliably.

  - Actively participated in production incident analysis and post-mortems, contributing to improvements in **system reliability, observability, and performance**.
        `,
    },
  ],
  education: [
    {
      school: "Ideal Institute of Engineering",
      href: "https://iiekalyani.com/",
      degree: "B.Tech In Computer Science",
      logoUrl: "/iie.jpeg",
      start: "2023",
      end: "Present",
    },
    {
      school: "North Calcutta Polytechnic",
      href: "https://polytechnic.wbtetsd.gov.in/northcalpoly",
      degree: "Diploma In Electrical Engineering",
      logoUrl: "/ncp.jpg",
      start: "2018",
      end: "2021",
    },
    {
      school: "Naihati Narendra Vidyaniketan",
      href: "https://nnv.org.in/admission.html",
      degree: "Higher Secondary (PCMCS)",
      logoUrl: "/nnv.jpg",
      start: "2016",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Hush",
      href: "https://hush.swiftgeek.in",
      dates: "Nov 2024 - Present",
      active: true,
      description:
        "Hush is a privacy first end-to-end encrypted chat and video calling platform.",
      technologies: [
        "NodeJs",
        "ExpressJs",
        "PostgreSQL",
        "Typescript",
        "TypeORM",
        "SocketIO",
        "WebRTC",
        "Crypto",
        "AWS S3",
        "Next.js",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://hush.swiftgeek.in",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aritradevelops/hush",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/hush.png",
      video: ""
    },
    {
      title: "Class Validator Custom Errors",
      href: "https://www.npmjs.com/package/class-validator-custom-errors",
      dates: "Feb 2024 - Feb 2024",
      active: true,
      description:
        "A fork of class-validator package with the ability to customizing the error messages elegantly. Very useful for implementing localization/internationalization",
      technologies: [
        "Typescript",
        "npm"
      ],
      links: [
        {
          type: "NPM",
          href: "https://www.npmjs.com/package/class-validator-custom-errors",
          icon: <Icons.npm className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aritradevelops/class-validator-custom-errors",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cvce.png",
      video: ""
    },
    {
      title: "Report AI",
      href: "https://github.com/aritradevelops/Report-AI",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "This script is an automated AI-driven report-generating tool designed to help complete assignments in minutes. With its local or cloud-based AI integration, users can produce detailed reports effortlessly.",
      technologies: [
        "Python",
        "ollama",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aritradevelops/Report-AI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/rai.png",
      video: ""
    },
    {
      title: "MaaS",
      href: "https://maas-alpha.vercel.app/",
      dates: "Oct 2024 - Oct 2024",
      active: true,
      description:
        "Meow as a service. A fun project to practice Next js, here you can share your cat, view other cats and use the apis to show them in other places.",
      technologies: [
        "Next.js",
        "Typescript",
        "AWS S3",
      ],
      links: [
        {
          type: "Website",
          href: "https://maas-alpha.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aritradevelops/maas",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/maas.png",
      video: ""
    },
  ],
  contributions: [
    {
      title: "The Openplane Core",
      year: "2025",
      events: ["hacktoberfest"],
      description: "Contributed to their impersonation module.",
      image: "https://avatars.githubusercontent.com/u/179269176?s=48&v=4",
      links: [
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.theopenlane.io/",
        },
        {
          title: "PRs",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/theopenlane/core/pulls?q=is%3Apr+author%3Aaritradevelops+is%3Aclosed",
        }
      ],
    },
    {
      title: "Diffium",
      year: "2025",
      events: ["hacktoberfest"],
      description: "Developed the revert back wizard",
      image: "https://avatars.githubusercontent.com/u/215217193?s=48&v=4",
      links: [
        {
          title: "PRs",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/interpretive-systems/diffium/pulls/aritradevelops",
        }
      ],
    },
    {
      title: "Papermark",
      year: "2024",
      events: ["hacktoberfest", "oss.gg"],
      description: "Contributed to their login section",
      image: "",
      links: [
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.papermark.com/",
        },
        {
          title: "PRs",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mfts/papermark/pulls?q=is%3Apr+author%3Aaritradevelops+is%3Aclosed",
        },
      ],
    },
    {
      title: "Dub",
      year: "2024",
      events: ["hacktoberfest", "oss.gg"],
      description: "Contributed to their help center section",
      image: "https://avatars.githubusercontent.com/u/153106492?s=48&v=4",
      links: [
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://dub.co/",
        },
        {
          title: "PRs",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dubinc/dub/pulls?q=is%3Apr+is%3Aclosed+author%3Aaritradevelops",
        },
      ],
    },
    {
      title: "Hanko",
      year: "2024",
      events: ["hacktoberfest", "oss.gg"],
      description: "Live integration and bug hunting with proposed solution",
      image: "https://avatars.githubusercontent.com/u/20222142?s=48&v=4",
      links: [
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.hanko.io/",
        },
        {
          title: "PRs",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/teamhanko/hanko/pulls/aritradevelops",
        }
      ],
    },
  ] as ContributionDetails[],
} as const;
