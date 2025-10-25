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
        `[**Simplified Checkout**](https://www.besimplified.com/checkout/)

* Engineered a high-performance theme rendering service capable of serving thousands of admin-built checkout themes at over **100k requests/sec** by storing compiled templates in AWS S3 and using Redis-backed precomputed data.
* Reduced page render latency by **~80%** using a **size-based LRU cache** for compiled templates and AWS Sticky Sessions to minimize cache misses.
* Designed and implemented a **custom HTML templating language** leveraging comment directives and data attributes to inject dynamic data such as pricing, product details, and user information without disrupting markup integrity.
* Architected a **modular provider system** supporting seamless integration with multiple e-commerce platforms (Shopify, WooCommerce) and CRMs (Sticky, CheckoutChamp, Vrio) through an auto-discoverable abstraction layer.
* Enhanced platform security with **brute-force protection**, **fraud detection**, and **intelligent traffic routing** mechanisms for A/B testing and performance monitoring.

**Simplified Core**

* Architected and developed a **unified backend framework** powering all Simplified products, providing **one-command CRUD generation** with built-in authentication (JWT), authorization (DAC model), and hook-based extensibility.
* Integrated **Kafka-based event streaming**, advanced query utilities (pagination, sorting, filtering, search), and structured logging for streamlined inter-service communication.
* Automated schema validation, error handling, and OpenAPI documentation generation to enforce standardization and consistency across microservices.
* Implemented **internationalization (i18n)** support, enabling all Simplified services to be multi-language ready.
* Adopted company-wide as the foundation for new product microservices, improving development velocity by **50%**, scalability, and maintainability.

[**Simplified HR**](https://www.besimplified.com/hr/)

* Designed and implemented an **automated leave crediting scheduler** capable of handling thousands of employees with retry, fallback, and failure notification mechanisms.
* Used **Google Cloud Tasks (GCT)** for distributed job handling and worker pools for concurrent credit computation, ensuring high availability and resilience.
* Built and maintained multiple HR modules, including **leave management**, **ticketing**, **employee tracking**, **notification system**, and **scheduler service**.
* Enhanced reliability and transparency by integrating alerting and logging mechanisms that notify administrators in case of critical failures or missed crediting events.`,
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
