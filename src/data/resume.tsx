import { ContributionDetails } from "@/components/contribution-card";
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  logoUrl: string;
  issueDate: string;
  certificateLink: string;
  techIcon?: React.ReactNode;
}

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
  resumeUrl: "/Aritra_Sadhukhan_Resume.pdf",
  skills: [
    "Node.js",
    "Typescript",
    "Go",
    "Python",
    "MongoDB",
    "DocumentDB",
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
    "GitHub Actions",
    "AWS S3",
    "AWS EC2",
    "AWS ECS",
    "AWS Lambda",
    "AWS SQS",
    "AWS Firehose",
    "AWS Athena",
    "AWS IAM",
    "AWS ECR",
    "OCI",
    "Locust",
    "FastAPI",
    "LangChain",
    "LangGraph",
    "RAG",
    "ChromaDB",
    "NumPy",
    "pandas",
    "scikit-learn",
  ],
  awards: [
    {
      title: "Outstanding Performance Award in Development",
      issuer: "Spectrum",
      date: "2023",
      href: "https://careers.codeclouds.com/spectrum/",
      logoUrl: `data:image/svg+xml,${encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect width="40" height="40" rx="20" fill="#8b5cf6"/><text x="20" y="27" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="700" fill="#ffffff">S</text></svg>'
      )}`,
      description: "![Receiving the Outstanding Performance Award in Development at Spectrum, 2023](/spectrum.jpeg)",
      alwaysExpanded: true,
    },
  ],
  certifications: [
    {
      title: "Model Context Protocol Advanced Topics",
      issuer: "Anthropic",
      logoUrl: "/Anthropic.jpg",
      issueDate: "May 2026",
      certificateLink: "https://verify.skilljar.com/c/dtsx672xu6t3",
    },
    {
      title: "The AI Engineer Course 2026: Complete AI Engineer Bootcamp",
      issuer: "Udemy",
      logoUrl: "/udemy.png",
      issueDate: "May 2026",
      certificateLink: "https://www.udemy.com/certificate/UC-85071a50-cc70-46ec-bd27-9baf0e6f7e2d/",
      techIcon: <Icons.python className="size-4" />,
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Udemy",
      logoUrl: "/udemy.png",
      issueDate: "Apr 2026",
      certificateLink: "https://www.udemy.com/certificate/UC-639ebef6-9f4a-4450-bf18-c81e473ddcbd/",
      // TODO: swap in Icons.aws once the AWS logo is added to icons.tsx + public/
    },
    {
      title: "Microservices With Go and GRPC",
      issuer: "Udemy",
      logoUrl: "/udemy.png",
      issueDate: "Feb 2025",
      certificateLink: "https://www.udemy.com/certificate/UC-9e06c6a6-5c87-497d-87a2-a0ab253ee3a4/",
      techIcon: <Icons.go className="size-4" />,
    },
    {
      title: "MySQL",
      issuer: "Udemy",
      logoUrl: "/udemy.png",
      issueDate: "Feb 2025",
      certificateLink: "https://www.udemy.com/certificate/UC-af21f0a9-b96d-4e0c-b8c6-82c0800123fb/",
      techIcon: <Icons.mysql className="size-4" />,
    },
    {
      title: "Docker",
      issuer: "Udemy",
      logoUrl: "/udemy.png",
      issueDate: "Jan 2024",
      certificateLink: "https://www.udemy.com/certificate/UC-66a1d601-a2ec-453a-9335-aed0eeaae2f0/",
      techIcon: <Icons.docker className="size-4" />,
    },
    {
      title: "Typescript",
      issuer: "Udemy",
      logoUrl: "/udemy.png",
      issueDate: "Jan 2024",
      certificateLink: "https://www.udemy.com/certificate/UC-41a78d80-b648-4999-8db0-a98b1ac90821/",
      techIcon: <Icons.typescript className="size-4" />,
    },
    {
      title: "Python",
      issuer: "Udemy",
      logoUrl: "/udemy.png",
      issueDate: "Jan 2024",
      certificateLink: "https://www.udemy.com/certificate/UC-a6969443-5fcc-4846-90ab-f17cb1e643d5/",
      techIcon: <Icons.python className="size-4" />,
    },
  ] as Certification[],
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
        url: "mailto:aritrasadhukhan430@gmail.com",
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
      start: "April 2024",
      end: "Present",
      description:
        `
  - Architected a headless, Python-based workflow orchestration engine for a telehealth automation platform, supporting 7+ automation use cases — including abandoned-cart retargeting, prescription renewal reminders, and multi-channel patient communication — with durable wait states and idempotent, Kafka-driven execution.

  - Designed a centralized event logging and traceability pipeline spanning 5 microservices for a telehealth platform using AWS Firehose, Lambda, S3, and Athena, with Parquet compression and automated lifecycle tiering to reduce long-term storage costs.

  - Re-architected a failing product synchronization pipeline handling up to 100,000 products using AWS SQS and Lambda, replacing in-process threaded imports with resilient cursor-based batching to eliminate rate-limit failures and database overload.

  - Designed a TypeScript backend framework for Fastify and Express.js adopted across 30+ microservices, standardizing auth, validation, and Kafka event streaming through a CLI code generator, cutting new-service boilerplate by ~40%.

  - Led load testing and performance optimization for a high-traffic e-commerce checkout platform using Locust, resolving bottlenecks via static routing, a Fastify migration, and PM2 clustering to sustain ~30,000 requests/second.

  - Engineered a two-tier caching architecture using Redis, in-memory LRU caches, and Pub/Sub invalidation, improving template rendering throughput by ~5x across horizontally scaled instances.

  - Built a multi-tenant analytics backend using Kafka and MongoDB aggregation pipelines, processing ~1M events and 100,000 orders to power real-time sales, conversion, and fraud-detection dashboards.

  - Built a multi-tenant SSO and identity platform using OAuth 2.0/OIDC and JWT-based authentication, supporting 4 MFA methods (TOTP, OTP, passkeys, recovery tokens) with device-level session management and RBAC across internal workspace applications.

  - Built an experimentation engine for checkout upsell optimization, enabling configurable A/B and split testing with session-persistent variant assignment across ~1M daily checkout requests.

  - Designed an extensible integration framework unifying 5 CRM and e-commerce platforms (Sticky, CheckoutChamp, Vrio, Shopify, WooCommerce) through a shared abstraction layer using the Abstract Factory pattern.

  - Designed a custom HTML templating language and synchronous rendering engine for a browser-based checkout builder, serving ~1M requests per day across merchant-customized checkout pages resolved live from Amazon S3.
        `,
    },
    {
      company: "CodeClouds",
      href: "https://www.codeclouds.com/",
      badges: [],
      location: "New Town, WB, IN",
      title: "Full Stack Developer",
      logoUrl: "/codeclouds.jpeg",
      start: "June 2022",
      end: "April 2024",
      description:
        `
  - Architected a modular leave accrual engine for an HR management platform, consolidating 52 policy combinations into 4 extensible strategies with cron-driven, idempotent asynchronous processing via Google Cloud Tasks.

  - Built and maintained REST APIs and microservices across 6 core HR platform modules — leave management, ticketing, notifications, scheduling, knowledge base, and centralized logging — using Node.js, Express.js, TypeScript, and Kafka.
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
