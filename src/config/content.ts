/**
 * CONTENT CONFIGURATION
 * 
 * All text content for the deck. Edit paragraphs, headings, and descriptions here.
 * This is the single source of truth for all deck content.
 */

export const content = {
  // Navigation
  nav: {
    title: "Overview",
    structure: "Structure",
    roles: "Roles",
    disruption: "Disruption",
    assets: "Assets",
    aces: "ACES",
    rez: "REZ",
    render: "Infrastructure",
    ai: "AI",
    timeline: "Timeline",
  },

  // Title Slide
  title: {
    title: "Pipeline Blueprint",
    subtitle: "A comprehensive roadmap for implementing an AI assisted and USD-centric studio pipeline for a growing London team",
  },

  // Studio Structure Section
  structure: {
    heading: "Studio structure",
    subheading: "Current state of the team",
    features: [
      {
        title: "Advanced pipeline Vision",
        description: "AI augmented USD-centric workflow focused on efficiency. Houdini serves as the primary DCC tool, creating a foundation for sophisticated production capabilities.",
      },
      {
        title: "Remote collaboration model",
        description: "Distributed team structure enables access to diverse talent across locations. Core pipeline architecture and optimization strategies are maintained while scaling from small projects to Film and TV standard production requirements.",
      },
      {
        title: "Diverse talent composition",
        description: "Senior pipeline lead, comp artist/pipeline engineer, AI-focused CG artists, and a Houdini artist form the core team.",
        subdescription: "Hiring plan: A mid-level pipeline developer role is being recruited at £40-50k/year.",
      },
    ],
  },

  // Roles Section
  roles: {
    heading: "VFX studio technical roles",
    headingHighlight: "technical roles",
    cards: [
      {
        title: "Pipeline Lead / TD",
        description: "Focus: Pipeline architecture & strategy",
        subdescription: "Responsibilities: Define OS support, pipeline vision, design and testing. Owns: Overall pipeline health; leads architecture decisions; interfaces with production and artists.",
      },
      {
        title: "Mid-level Pipeline Developer",
        description: "Focus: Core system & tool development",
        subdescription: "Responsibilities: Build and maintain pipeline tools, workflows, mentor team. Owns: Technical implementation of pipeline systems; delivers new features; supports production needs.",
      },
      {
        title: "Junior Pipeline Engineer",
        description: "Focus: Day-to-day pipeline support",
        subdescription: "Responsibilities: OS support, Stability QA, testing and maintaining hardware/Software. Owns: Routine maintenance, software compatibility, benchmarking, implementation and assists in tool development.",
      },
      {
        title: "IT Specialist",
        description: "Focus: Infrastructure & systems management",
        subdescription: "Responsibilities: Manage hardware, network, licenses, backups, deployments. Owns: Studio infrastructure reliability, license management, and environment setup; collaborates with pipeline team.",
      },
    ],
  },

  // Responsibility Matrix Section (merged into Roles)
  responsibility: {
    heading: "Matrix",
    summary: [
      "Lead/TD: 40% technical direction/mentoring, 30% strategic planning, 30% complex problem-solving/troubleshooting",
      "Pipeline Developer: 60% feature/system work, 25% maintenance/refactoring, 15% support/collab",
      "Junior Engineer: 70% bugfix/support, 20% new feature assisting, 10% onboarding/training",
      "IT Specialist: 80% infrastructure, 10% deployment/collab, 10% security/backup",
    ],
    tableColumns: {
      task: "Task/Project",
      lead: "Pipeline Lead/TD",
      dev: "Pipeline Developer",
      junior: "Junior Engineer",
      it: "IT Specialist",
    },
    tableData: [
      { task: "New pipeline feature design", lead: "Directs/specifies", dev: "Builds/architects", junior: "Assists/tests", it: "Supports" },
      { task: "Render farm integration", lead: "Approves/top-level", dev: "Engineers/scripts", junior: "Configures UI", it: "Deploys" },
      { task: "Asset publishing automation", lead: "Defines process", dev: "Builds core", junior: "Maintains", it: "" },
      { task: "Artist tool support", lead: "Mentors/designs", dev: "Manages refactoring", junior: "Bugfixes/test", it: "" },
      { task: "DCC integration", lead: "Approves/selects", dev: "Implements bridges", junior: "Tests/reports", it: "" },
      { task: "Environment setup", lead: "Sets standards", dev: "Automates/Rez", junior: "Assists deploy", it: "Maintains" },
      { task: "Git/Version control rules", lead: "Defines workflows", dev: "Implements logic", junior: "Provides GUI", it: "" },
      { task: "Hardware/network issues", lead: "Consults", dev: "Helps debug", junior: "Reports", it: "Owns/solves" },
      { task: "Documentation/trainings", lead: "Sets standards", dev: "Authors core guides", junior: "Updates FAQ", it: "Onboarding" },
    ],
  },

  // AI Disruption & Studio Resilience Section
  disruption: {
    heading: "AI Disruption & Studio Resilience",
    problem: {
      heading: "The Problem: AI Bubble & Market Correction",
      bubbleEra: {
        title: "Bubble Era (2022–2024)",
        items: [
          'Overhyped promises: "AI will replace VFX teams," "one-prompt filmmaking," "$1,000 movies"',
          "Stock surges on AI announcements; irrational expectations",
          "Raw AI tools rushed into production without quality control",
        ],
      },
      marketCorrection: {
        title: "Market Correction (2025 onwards)",
        items: [
          "Quality improvements slowing vertically – diminishing returns on technical gains",
          "AI expanding horizontally – wider applications, not dramatically better outputs",
          "Industry recognizing AI as co-pilot, not replacement",
        ],
      },
    },
    response: {
      heading: "The Strategic Response: Build for Resilience",
      whatWorks: {
        heading: "What Works ✓",
        items: [
          {
            title: "AI-Assisted Workflows",
            description: "Use AI to reach 50% quality at 15% cost. Human refinement completes work to 100% quality.",
            benefits: [
              "40–50% cost savings vs. pure manual",
              "2–3x faster delivery",
            ],
          },
          {
            title: "Local ComfyUI Integration",
            description: "Avoid web service over-reliance. Maintain control, privacy, and cost predictability.",
            benefits: [
              "Batch processing via Deadline for production scale",
            ],
          },
          {
            title: "Houdini Procedural Workflows",
            description: "Procedural/node-based work is fundamentally defensible. Cannot be easily replaced by generative tools.",
            benefits: [
              "Pairs effectively with AI-assisted asset creation",
            ],
          },
          {
            title: "Pipeline Infrastructure as Competitive Advantage",
            description: "Build systems that control AI tools, not compete with them.",
            benefits: [],
          },
        ],
      },
      whatDoesntWork: {
        heading: "What Doesn't Work ✗",
        items: [
          {
            title: "Pure AI-Generated Workflows",
            description: "Reaches 80% quality at low cost. Plateaus at 80% – cannot reach production quality.",
            issues: [
              "Cannot meet client expectations or Gen Z authenticity standards",
            ],
          },
          {
            title: "Raw AI Output to Clients",
            description: "55–62% of Gen Z reject AI-generated content as inauthentic.",
            issues: [
              "Perceived as lower quality, less trustworthy",
              "Brand risk for clients targeting younger audiences",
            ],
          },
          {
            title: "Over-Reliance on Web Services",
            description: "Cost unpredictability and rate limiting.",
            issues: [
              "Privacy and data ownership concerns",
              "Infrastructure dependency creates production risk",
            ],
          },
        ],
      },
    },
    qualityVsInvestment: {
      heading: "Quality vs. Investment: Three Paths",
      paths: [
        {
          title: "Path 1: AI-Only (Red)",
          investment: "10% investment → 80% quality",
          quality: "Plateaus – cannot progress to 100%",
          useCase: "Pre-production, concepting, internal iteration only",
        },
        {
          title: "Path 2: Traditional CG (Blue)",
          investment: "100% investment → 100% quality",
          quality: "Linear cost-to-quality curve",
          useCase: "Legacy workflows; slow, expensive",
        },
        {
          title: "Path 3: AI-Assisted (Green)",
          investment: "15% investment → 50% quality (AI generation)",
          quality: "85% investment → 100% quality (human refinement)",
          useCase: "Production delivery; fastest ROI, best quality",
          result: "40–50% cost savings, 2–3x faster than pure manual",
          recommended: true,
        },
      ],
    },
    defensiblePosition: {
      heading: "Your Defensible Position",
      skillsThatSurvive: {
        heading: "Skills That Survive AI Disruption",
        items: [
          "Procedural architecture (Houdini, VEX, node-based thinking)",
          "Pipeline engineering (Python, system design, workflow automation)",
          "AI orchestration (controlling and integrating AI tools into production)",
          "Creative refinement (human judgment, authenticity, client alignment)",
        ],
      },
      skillsAtRisk: {
        heading: "Skills at Risk",
        items: [
          "Execution-focused junior roles (rotoscoping, simple asset generation)",
          "Manual repetitive tasks (easily offloaded to AI)",
          "Workflows without infrastructure (ad-hoc, brittle processes)",
        ],
      },
    },
    bottomLine: {
      heading: "Bottom Line",
      goal: "Goal: Build a production pipeline and team that survives and thrives in an AI-transformed VFX, print, and advertising landscape.",
      strategy: {
        heading: "Strategy:",
        items: [
          "Embrace AI as a force multiplier, not a replacement",
          "Maintain human refinement for quality and authenticity",
          "Invest in robust pipeline infrastructure that integrates AI controllably",
          "Build defensible skills in orchestration, not execution",
        ],
      },
    },
  },

  // Assets Section
  assets: {
    heading: "Building SQLite-driven libraries",
    subheading:
      "Move beyond HDRs and textures: use SQLite to manage 3D assets, prompts, and archived project data with a consistent, searchable tag system.",
    infoCards: [
      "Use existing 3D libraries as seed data, then normalize them into a single SQLite schema for assets, prompts, and references.",
      "Design a tagging and metadata model so prompts, 3D assets, and project archives can be cross‑referenced and searched efficiently.",
      "Legacy sources like Bonfire, HND, GSG, and Jorge Lega’s tooling become inputs into one canonical SQLite library instead of separate silos.",
    ],
  },

  // ACES Section
  aces: {
    heading: "ACES = USD for Editorial",
    description: "Fixes color inconsistencies across shots, assets, and departments.",
    cards: [
      "Required by high-end productions",
      "Ensures consistency in color workflows",
      "Protects image quality from burnout",
    ],
    workflow: [
      {
        title: "CG-output",
        description: "Textures and input images digested through OCIO ACES presets",
      },
      {
        title: "Comp / Retouch",
        description: "Editorial may convert to ACEScc, for compositing ACEScg is fine",
      },
      {
        title: "Deliverable",
        description: "Editorial converts to delivery format using Output Transform/LUT",
      },
    ],
    materialx: {
      heading: "MaterialX (MTLX) & OpenPBR",
      description: "Open standard for rich material/shader definitions and exchange across DCCs and renderers.",
      features: [
        {
          title: "Cross-platform",
          description: "Enables high-fidelity, cross-studio asset sharing without re-authoring.",
        },
        {
          title: "Industry-backed",
          description: "Developed by Sony/ILM, now supported by ASWF.",
        },
        {
          title: "Unified model",
          description: "OpenPBR provides physically-based surfaces with complex layering.",
        },
        {
          title: "Wide compatibility",
          description: "Easily transfers between Houdini, Maya, Blender, V-Ray and more.",
        },
      ],
    },
  },

  // REZ Section
  rez: {
    heading: "REZ: Automated Environment and Dependency Control",
    description: "REZ: All artist and render farm machines use dynamically-resolved environments (software, plugins, versions) so \"works on my machine\" bugs are eliminated. Deployment and updates are frictionless.",
    launcher: {
      heading: "Launchers and Unified Interface",
      description: "Project Launchers: One-click environment setup, DCC startup, shot/asset assignment, render queue integration.",
      packages: ["Pipeline", "GSG Libraries", "Deadline Submitter", "Redshift", "Ftrack Submitter"],
    },
  },

  // Render Section
  render: {
    heading: "Integrated render farm",
    headingHighlight: "render farm",
    subheading: "Deadline offers sophisticated job orchestration with license-saving optimizations for maximum hardware ROI.",
    subheadingHighlight: "sophisticated job orchestration",
    features: [
      {
        title: "CPU/GPU scaling",
        description: "Flexible resource allocation optimizes rendering performance. Dynamically scale processing power based on job requirements and available hardware.",
      },
      {
        title: "License optimization",
        description: "Husk standalone submission for Houdini/Karma uses render licenses instead of costly DCC/interactive licenses. Maximizes ROI, especially for commercial seats.",
      },
      {
        title: "Advanced orchestration",
        description: "Priority queuing and dependency chaining maximize workflow efficiency. Dashboard monitoring provides real-time visibility into render processes.",
      },
    ],
    versionControl: {
      heading: "Robust Version Control",
      subheading: "Publishing tools enforce standards, automate versioning, and integrate with asset browsers and DCC GUIs.",
      cards: [
        {
          title: "Lowered Technical Barriers",
          description: "Artists work in feature branches with GUI-driven processes.",
        },
        {
          title: "Collaboration Framework",
          description: "Git LFS + Branching for tracking all project files.",
        },
        {
          title: "Comprehensive File Tracking",
          description: "All project files including large binaries (.hip, .blend, .usdc) are tracked.",
        },
      ],
    },
  },

  // AI Section
  ai: {
    heading: "AI tools in production",
    description:
      "AI tools accelerate research, coding, and exploration but remain assistive. All critical code, assets, and workflows stay owned, reviewed, and maintained inside the studio’s repositories and infrastructure.",
    generativeModel: {
      heading: "Tooling and integration",
      paragraphs: [
        "Cursor accelerates development by scaffolding modules, refactoring legacy scripts, and generating tests around existing pipeline components, while Perplexity speeds up technical research and vendor evaluation—decisions are always verified and committed in Git.",
        "Low-/no-code tools like Lovable and v0 are useful for rapid UI and prototype exploration but are not treated as core production surfaces due to code quality, control, and lock-in concerns; valuable patterns discovered there are reimplemented in the studio’s own stack.",
        "For image and asset generation, hosted services such as Krea and similar web UIs are kept for early ideation only, while ComfyUI is preferred for production because it can run on internal hardware, integrate with the launcher, and expose node graphs and parameters under full studio control with manual QC by artists.",
      ],
    },
    riskAssessment: {
      title: "Risk Assessment",
      risks: [
        { name: "Vendor Lock-in (Lovable, v0, hosted AI UIs)", likelihood: "medium" as const, impact: "high" as const },
        { name: "Cloud Misconfiguration / External Service Outage", likelihood: "medium" as const, impact: "medium" as const },
        { name: "Data Privacy & Model Training Risk", likelihood: "low" as const, impact: "high" as const },
        { name: "Unexpected Updates to Hosted Tools & APIs", likelihood: "high" as const, impact: "medium" as const },
      ],
    },
  },

  // Timeline Section
  timeline: {
    heading: "8-Month Strategic Action Plan",
    description: "Strategic infrastructure development, database standardization, and render automation drive ROI, accelerate production velocity, and ensure assets and projects are systematically tracked, versioned, and delivered",
    scrum: {
      heading: "The Scrum Framework",
      description: "Scrum is an iterative and incremental Agile framework designed to help teams tackle complex projects by working in short, focused cycles called sprints. It emphasizes collaboration, transparency, and continuous improvement through well-defined roles, events, and artifacts.",
      principles: {
        heading: "Core Principles",
        intro: "Scrum is built on three foundational pillars of empirical process control:",
        items: [
          {
            title: "Transparency",
            description: "Work is visible to all stakeholders, from backlog items to sprint progress, ensuring everyone understands current status and challenges.",
          },
          {
            title: "Inspection",
            description: "Regular check-ins (daily stand-ups, sprint reviews) enable teams to continuously evaluate progress and identify issues early.",
          },
          {
            title: "Adaptation",
            description: "Teams quickly adjust when the product, process, or priorities aren't delivering desired outcomes.",
          },
        ],
      },
    },
    phases: [
      {
        number: 1,
        title: "Deadline Submitter & REZ",
        weeks: "Weeks 1–8",
        status: "Highest Priority",
        sprints: [
          {
            number: 1,
            weeks: "Weeks 1–2",
            tasks: [
              "REZ package structure design and initial setup",
              "Package Houdini and Python dependencies",
              "Test basic REZ environment resolution",
            ],
          },
          {
            number: 2,
            weeks: "Weeks 3–4",
            tasks: [
              "Build Houdini Karma XPU ROP node for Deadline submission",
              "Implement scene validation and dependency detection",
              "Create job description JSON for Deadline Cloud",
            ],
          },
          {
            number: 3,
            weeks: "Weeks 5–6",
            tasks: [
              "Integrate REZ with launcher for environment resolution",
              "Implement version-locked project environments",
              "Package Nuke and additional DCC dependencies",
            ],
          },
          {
            number: 4,
            weeks: "Weeks 7–8",
            tasks: [
              "Deploy and commission 8-node render rack hardware",
              "Configure Deadline workers with REZ integration",
              "Add job monitoring and status feedback to launcher",
              "End-to-end render submission testing",
            ],
          },
        ],
      },
      {
        number: 2,
        title: "Launcher & SQLite Database",
        weeks: "Weeks 9–16",
        sprints: [
          {
            number: 5,
            weeks: "Weeks 9–10",
            tasks: [
              "Design SQLite database schema (asset metadata, project relationships, versioning)",
              "Create skeleton launcher GUI mockup and basic window structure",
              "Set up development environment and Git repository",
            ],
          },
          {
            number: 6,
            weeks: "Weeks 11–12",
            tasks: [
              "Implement SQLite database with core tables (assets, projects, users, activity logs)",
              "Build launcher project selection interface",
              "Create basic database connection and query functions",
            ],
          },
          {
            number: 7,
            weeks: "Weeks 13–14",
            tasks: [
              "Implement DCC launching functionality with environment variable handling",
              "Build basic asset browser UI that queries SQLite database",
              "Add asset metadata display (versions, tags, departments, status)",
            ],
          },
          {
            number: 8,
            weeks: "Weeks 15–16",
            tasks: [
              "Integration testing: launcher ↔ SQLite read/write validation",
              "User activity logging implementation",
              "Bug fixes and initial artist feedback session",
            ],
          },
        ],
      },
      {
        number: 3,
        title: "Version Control & Task Management",
        weeks: "Weeks 17–24",
        sprints: [
          {
            number: 9,
            weeks: "Weeks 17–18",
            tasks: [
              "Design Git LFS repository structure and branching strategy",
              "Set up Git LFS for USD files, texture caches, and Comfy workflows",
              "Create artist documentation for Git basics",
            ],
          },
          {
            number: 10,
            weeks: "Weeks 19–20",
            tasks: [
              "Research and select production tracker (Kitsu recommended)",
              "Set up Kitsu instance (cloud or self-hosted)",
              "Design task/shot/asset data model alignment with SQLite",
            ],
          },
          {
            number: 11,
            weeks: "Weeks 21–22",
            tasks: [
              "Implement Kitsu API integration in launcher",
              "Build two-way sync: task status updates and assignment tracking",
              "Automated shot/asset creation from SQLite database",
            ],
          },
          {
            number: 12,
            weeks: "Weeks 23–24",
            tasks: [
              "USD pipeline foundation: standardize export/import paths",
              "Implement artist-friendly Git commit/pull workflows (possibly via launcher GUI)",
              "Integration testing and artist training on version control basics",
            ],
          },
        ],
      },
      {
        number: 4,
        title: "Render Automation & USD Workflows",
        weeks: "Weeks 25–32",
        sprints: [
          {
            number: 13,
            weeks: "Weeks 25–26",
            tasks: [
              "Create pre-configured Deadline job templates for Karma XPU batch rendering",
              "Implement dependency tracking between render jobs",
              "Build auto-submission logic for multi-shot sequences",
            ],
          },
          {
            number: 14,
            weeks: "Weeks 27–28",
            tasks: [
              "Design shared MaterialX/OpenPBR material library structure",
              "Create SQLite tables for material metadata and linking",
              "Implement ACES color management in Karma XPU pipeline",
            ],
          },
          {
            number: 15,
            weeks: "Weeks 29–30",
            tasks: [
              "Build simulation/cache generation job templates for Deadline",
              "Create USD export validators for asset publishing",
              "Implement material library browser in launcher",
            ],
          },
          {
            number: 16,
            weeks: "Weeks 31–32",
            tasks: [
              "End-to-end automated render workflow testing",
              "Asset publishing validation with USD + MaterialX",
              "Documentation and artist training on material workflows",
            ],
          },
        ],
      },
      {
        number: 5,
        title: "AI Integration & Advanced Features",
        weeks: "Weeks 33–40",
        sprints: [
          {
            number: 17,
            weeks: "Weeks 33–34",
            tasks: [
              "Design ComfyUI pipeline integration architecture",
              "Create custom ComfyUI nodes for production asset workflows",
              "Set up ComfyUI batch processing via Deadline",
            ],
          },
          {
            number: 18,
            weeks: "Weeks 35–36",
            tasks: [
              "Implement SQLite logging for AI-generated assets and prompts",
              "Build AI asset versioning and metadata tracking",
              "Create thumbnail generation system for asset browser",
            ],
          },
          {
            number: 19,
            weeks: "Weeks 37–38",
            tasks: [
              "Implement advanced asset browser features: smart search, filtering, tagging",
              "Create department-specific views and workflows",
              "Add preview functionality for common asset types",
            ],
          },
          {
            number: 20,
            weeks: "Weeks 39–40",
            tasks: [
              "Integrate Frame.io or Kitsu for automated review/delivery",
              "Build export presets and automated delivery workflows",
              "End-to-end AI workflow testing and validation",
            ],
          },
        ],
      },
      {
        number: 6,
        title: "Performance Optimization",
        weeks: "Weeks 41–48",
        sprints: [
          {
            number: 21,
            weeks: "Weeks 41–42",
            tasks: [
              "Profile SQLite database query performance",
              "Optimize slow queries and add indexes where needed",
              "Render farm efficiency analysis and tuning",
            ],
          },
          {
            number: 22,
            weeks: "Weeks 43–44",
            tasks: [
              "Comprehensive team training: launcher, REZ, Deadline submission",
              "Hands-on workshops for Git LFS and task tracking workflows",
              "Gather detailed artist feedback on pain points",
            ],
          },
          {
            number: 23,
            weeks: "Weeks 45–46",
            tasks: [
              "Create internal wiki/documentation for all pipeline tools",
              "Write troubleshooting guides and best practices",
              "UX refinement based on artist feedback",
            ],
          },
          {
            number: 24,
            weeks: "Weeks 47–48",
            tasks: [
              "Final integration testing across all systems",
              "Performance benchmarking and ROI analysis",
              "Growth planning: assess readiness for TV/Film projects and team scaling",
              "Retrospective and roadmap for next phase",
            ],
          },
        ],
      },
    ],
  },

  // Footer
  footer: {
    text: "Pipeline Blueprint 2025 • London VFX Studio",
  },
};

