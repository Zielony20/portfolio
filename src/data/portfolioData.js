export const personalData = {
  name: 'Piotr Sikora-Malach',
  title: 'Backend & Systems Engineer (Go / Rust) | DevOps, Cloud & Automation',
  location: 'Poznań, Poland',
  photo: 'profile-placeholder.svg',
  photoAlt: 'Profile photo placeholder to be replaced with a personal photograph',
  email: 'piotrsikora98@gmail.com',
  phone: '+48 697 358 952',
  linkedin: 'https://www.linkedin.com/in/piotr-sikora/',
  github: 'https://github.com/Zielony20',
  bio: 'Since February 2023, I have worked as a Fullstack Software Engineer at Nokia on cybersecurity projects. I combine backend development in Go, Java, Rust and Python with cloud infrastructure and workflow automation. I am the creator of the bienvenidosprimavera.pl platform (with n8n business automations) and BetterMe, an end-to-end habit and biometric tracking platform with an asynchronous Rust backend and Android client.',
  stats: [
    { label: 'PrimaVera users', value: '~40' },
    { label: 'PrimaVera & Automation', value: 'Go / PostgreSQL / n8n' },
    { label: 'BetterMe platform', value: 'Rust / Android / React / KinD' },
    { label: 'Nokia experience', value: 'Cybersecurity & Cloud' },
  ],
};

export const featuredProjects = [
  {
    id: 'better-me',
    title: 'BetterMe | Holistic Health & Activity Platform',
    subtitle: 'An end-to-end self-improvement and biometric tracking system with a Rust backend and Android client',
    category: 'Backend · Rust · Mobile · Cloud',
    description: 'I created BetterMe to track and analyze personal health indicators, sleep stages, screen time, and focus habits with total privacy and local data ownership. The platform features an asynchronous, high-throughput Rust backend, a native Android companion application with background synchronization, a modern React web dashboard, and automated Kubernetes deployments.',
    status: 'My own active platform',
    link: 'https://bienvenidosprimavera.online',
    linkLabel: 'Visit bienvenidosprimavera.online',
    cvDescription: 'Designed and implemented the complete BetterMe ecosystem: high-performance asynchronous Rust backend (Axum, Tokio, SQLx, PostgreSQL/SQLite), native Android companion application (Kotlin, Jetpack Compose, WorkManager), React/TypeScript dashboard, Chrome extension, and containerized deployment with KinD/Kubernetes and automated backup verification.',
    highlights: [
      'High-throughput asynchronous Rust backend with Axum, Tokio, and SQLx handling continuous sensor streams.',
      'Native Android client featuring Jetpack Compose and WorkManager for resilient offline-first synchronization.',
      'Containerized microservice architecture on Kubernetes (KinD) with automated health monitoring and safe deployment workflows.',
    ],
    diagrams: [
      {
        id: 'betterme-arch',
        title: 'Platform Architecture & End-to-End Flow',
        badge: 'Architecture Model',
        description: 'Interactive system topology showing multi-platform clients (Android Compose & Chrome MV3), Axum/Tokio async Rust ingestion, PostgreSQL/SQLite storage, and KinD Kubernetes deployment.',
        src: '/diagrams/betterme-architecture.html',
      },
    ],
    codeSections: [
      {
        title: 'Asynchronous Rust backend',
        description: 'The backend is built in Rust using Axum and Tokio, optimized for minimal latency, low memory footprint, and reliable asynchronous stream processing.',
        details: [
          'RESTful API for telemetry, activity sessions, sleep intervals, and productivity metrics.',
          'SQLx integration supporting PostgreSQL in production and SQLite for local embedded use.',
          'Structured logging with tracing, strongly typed configuration, and comprehensive error handling.',
        ],
      },
      {
        title: 'Mobile & browser clients',
        description: 'Companion applications collect device indicators and provide immediate user feedback without degrading battery life.',
        details: [
          'Native Android application written in Kotlin with Jetpack Compose UI.',
          'WorkManager background tasks managing queue-based synchronization during network transitions.',
          'Chrome Manifest V3 extension tracking web focus and digital wellness sessions.',
        ],
      },
      {
        title: 'Frontend dashboard',
        description: 'Interactive analytics dashboard visualizing trends, sleep consistency scores, and activity habits.',
        details: [
          'Modern SPA built with React, TypeScript, Vite, and Tailwind CSS.',
          'Responsive data charts, daily summary views, and device connection management.',
          'Local-first privacy architecture ensuring all analytics remain under user control.',
        ],
      },
      {
        title: 'Infrastructure and operations',
        description: 'Containerized deployment managed via KinD, Docker Compose, and automated verification scripts.',
        details: [
          'Kubernetes manifests and KinD cluster automation with persistent volumes.',
          'Automated deployment scripts (safe-deploy.sh) with pre-deployment database backups.',
          'Isolated secrets management and health-check probes for high availability.',
        ],
      },
    ],
    publicScopeNote: 'Full-stack platform created and actively maintained by Piotr Sikora-Malach.',
    tags: ['Rust', 'Axum', 'Tokio', 'SQLx', 'PostgreSQL', 'SQLite', 'Android', 'Kotlin', 'Jetpack Compose', 'WorkManager', 'React', 'TypeScript', 'Tailwind CSS', 'Docker', 'Kubernetes', 'KinD', 'Chrome Extension', 'REST API'],
  },
  {
    id: 'primavera',
    title: 'PrimaVera | bienvenidosprimavera.pl',
    subtitle: 'A language-school platform: backend, n8n automations, integrations and infrastructure',
    category: 'Backend · DevOps · Security · Automation',
    description: 'I created this platform for a Spanish-language school, serving approximately 40 users. It combines learning activities with school administration: a student application, PrimaPanel for teachers and administrators, a lesson calendar, timesheets, and extensive n8n workflow automations for processing materials, backups, CRM synchronization, and notifications.',
    status: 'My own platform · approximately 40 users',
    link: 'https://bienvenidosprimavera.pl',
    linkLabel: 'Visit bienvenidosprimavera.pl',
    cvDescription: 'Created the entire language-school platform, serving approximately 40 users, with a Go backend (Gin, GORM), PostgreSQL, React, and extensive n8n workflow automations. The codebase includes REST APIs, JWT authentication, Google Drive, Brevo and Telegram integrations, automated student onboarding via n8n, LLM/TTS material processing, configurable Qdrant and MinIO modules, and Kubernetes, Helm, Terraform, and Vault infrastructure.',
    highlights: [
      'Separate backend layers for business entities, repository interfaces, PostgreSQL implementations, services and HTTP handlers.',
      'Event-driven n8n workflow automations handling student onboarding, CRM sync, and automated Telegram bot dispatches.',
      'Business workflows covering scheduling, attendance, timesheets, administrator approval and CSV exports.',
      'Supporting services and deployment scripts with backups, readiness checks and failure handling.',
    ],
    diagrams: [
      {
        id: 'primavera-arch',
        title: 'Production Kubernetes & Services Architecture',
        badge: 'K8s Cluster Topology',
        description: 'Comprehensive cluster layout on host .61: Cloudflare Tunnel, Ingress controller, Go Gin backend, authentication service, DB management UI, multiplayer engine, PostgreSQL, Qdrant vector database, HashiCorp Vault, n8n automations, and Prometheus monitoring.',
        src: '/diagrams/primavera-architecture.html',
      },
      {
        id: 'primavera-sec-dataflow',
        title: 'Security Telemetry & n8n Alerting Pipeline',
        badge: 'Dataflow & Event Automation',
        description: 'Live incident triage topology: Postgres audit events and Prometheus alerts ingested via HMAC webhooks, evaluated in n8n, authorized against Vault, and dispatched to Telegram Ops bot and Brevo, with automated Cloudflare WAF IP blocks and GitOps rollbacks.',
        src: '/diagrams/primavera-security-dataflow.html',
      },
    ],
    codeSections: [
      {
        title: 'Backend and data modeling',
        description: 'The Go and Gin API uses GORM and PostgreSQL. Separate layers keep business rules independent of HTTP handling and database access.',
        details: [
          'REST APIs for users, lessons, learning progress, schedules and attendance.',
          'Student-teacher relationships, recurring lessons, rescheduling and timesheet approval workflows.',
          'Repository transactions, schema models and migrations, CSV exports and API integration tests.',
        ],
      },
      {
        title: 'Application security',
        description: 'The backend handles authentication and authorization. User roles and relationships determine access to application data.',
        details: [
          'JWT and refresh tokens, session revocation and bcrypt password hashing.',
          'Two-factor authentication with TOTP and rate limiting on selected endpoints.',
          'Audit logs for administrative actions and application secrets supplied through HashiCorp Vault.',
        ],
      },
      {
        title: 'Integrations and n8n workflow automation',
        description: 'Supporting services and n8n automations handle educational materials, CRM synchronization, and communication without blocking the user interface.',
        details: [
          'n8n automated workflow engine connecting landing page webhooks, CRM records, payment events, and automated notifications.',
          'Google Drive API for material synchronization and backups, Brevo for email and a dedicated Telegram notification service.',
          'Material processing with LLM provider clients, PDF/DOCX parsers, TTS queues and question generation.',
          'Qdrant for embedding-based image retrieval and MinIO for S3-compatible object storage, enabled according to service configuration.',
        ],
      },
      {
        title: 'Infrastructure and deployment',
        description: 'The repository contains container definitions, Helm charts, a KinD environment and Terraform-managed infrastructure configuration.',
        details: [
          'Docker, Kubernetes and Helm with separate deployments, services, configuration and CronJobs.',
          'Cloudflare Tunnel and service-access configuration, plus Argo CD manifests for Git-based configuration synchronization.',
          'The safe-deploy script builds applications, creates pre-deployment backups, checks rollouts and health endpoints, and handles failures.',
        ],
      },
      {
        title: 'Testing and change verification',
        description: 'Tests cover backend logic, HTTP workflows and PrimaPanel controller contracts. Browser scenarios are maintained separately.',
        details: [
          'Go unit and integration tests, with isolated SQLite databases for selected workflows.',
          'Vitest for PrimaPanel and Playwright for browser scenarios.',
          'Authorization and data-flow checks, including calendar, timesheet, approval and CSV-export workflows.',
        ],
      },
      {
        title: 'Operations and diagnostics',
        description: 'The platform provides health endpoints, service-log collection and status reporting for administrative jobs.',
        details: [
          'Service logs forwarded to a shared collector and a component-health dashboard.',
          'Backup status reporting and notifications to support troubleshooting across services.',
          'Network segmentation with Cilium and standard NetworkPolicy, plus pod security policies.',
        ],
      },
    ],
    publicScopeNote: 'Platform authorship and approximately 40 users confirmed on 14/10/2026. The architecture overview is based on the project code and configuration.',
    tags: ['Go', 'Gin', 'GORM', 'PostgreSQL', 'n8n', 'Workflow Automation', 'Qdrant', 'MinIO / S3', 'REST API', 'React', 'Bootstrap', 'Sass', 'JWT', 'TOTP', 'bcrypt', 'Docker', 'Kubernetes', 'KinD', 'Helm', 'Terraform', 'HashiCorp Vault', 'Cilium', 'NetworkPolicy', 'Cloudflare Tunnel', 'Argo CD', 'Google Drive API', 'Brevo', 'Telegram API', 'LLM APIs', 'Text-to-Speech (TTS)', 'SQLite (tests)', 'Vitest', 'Playwright'],
  },
];

export const skillsCategories = [
  {
    title: 'Backend & Distributed Systems',
    skills: ['Golang', 'Java 17+', 'Rust (Axum, Tokio, SQLx)', 'Python', 'Lua', 'Gin', 'Spring Boot', 'FastAPI', 'REST API', 'GORM', 'Distributed Systems', 'Business domain modeling', 'Data access abstraction'],
  },
  {
    title: 'Workflow Automation & AI Tooling',
    skills: ['n8n (Workflow Automation)', 'Event-Driven Architectures', 'Webhook Integrations', 'Telegram Bot API', 'Antigravity SDK', 'Claude Code', 'Cursor', 'Ollama', 'Qdrant (Vector DB)'],
  },
  {
    title: 'DevOps & Infrastructure',
    skills: ['Docker', 'Kubernetes (AKS, OpenShift, KinD)', 'Helm', 'Terraform / IaC', 'KinD', 'Cloudflare Tunnel', 'Deployment automation', 'Ansible', 'kpt'],
  },
  {
    title: 'Cybersecurity',
    skills: ['eBPF', 'Cilium', 'NetworkPolicy', 'HashiCorp Vault', 'JWT', 'OAuth 2.0', '2FA'],
  },
  {
    title: 'Testing & Code Quality',
    description: 'Testing complete workflows, debugging failures and reviewing changes for production-ready configuration.',
    skills: ['Unit Testing', 'Integration Testing', 'End-to-End Testing', 'Go testing', 'Playwright', 'Vitest', 'PyTest', 'Robot Framework', 'Code Review', 'Debugging'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'SQLite', 'MySQL', 'Cassandra', 'Qdrant'],
  },
  {
    title: 'Integrations',
    skills: ['n8n', 'API integrations', 'Google Drive API', 'Brevo', 'Telegram API', 'LLM APIs', 'Text-to-Speech (TTS)'],
  },
  {
    title: 'Observability',
    skills: ['OpenTelemetry / OTel', 'Micrometer', 'Prometheus', 'Grafana'],
  },
];

export const experienceTimeline = [
  {
    role: 'Fullstack Software Engineer',
    company: 'Nokia Solutions And Networks Sp. z o.o.',
    period: '02/2023 - present',
    location: 'Poznań',
    description: 'Software development across cybersecurity projects. English-speaking working environment, with English at B2 level.',
    bulletPoints: [
      'Adapted an agent installation process to a customer requirement for non-root execution by identifying commands requiring sudo and limiting elevated privileges.',
      'Designed and implemented microservices, fixed bugs, prepared tests and technical documentation, and participated in code reviews.',
      'Proposed architectural solutions and adapted installation workflows to evolving deployment mechanisms.',
      'Worked with Java, Go, Python, Lua, Ansible, Kubernetes, Helm, Terraform and kpt.',
      'Collaborated and communicated technical information in English.',
    ],
  },
  {
    role: 'Junior Software Tester',
    company: 'Solwit S.A.',
    period: '07/2021 - 02/2022',
    location: 'Poznań',
    description: 'Firmware testing for network interface cards in server-lab environments.',
    bulletPoints: [
      'Configured network test environments and server racks.',
      'Automated testing processes and managed test pipelines.',
      'Documented defects and tracked them through fix verification.',
    ],
  },
  {
    role: 'Linux Administrator Intern',
    company: 'Vobacom',
    period: '08/2017',
    location: 'Toruń',
    description: 'Linux server administration and website development with Drupal CMS.',
  },
];

export const educationHistory = [
  {
    degree: 'MSc Eng in Computer Science',
    school: 'Poznań University of Technology',
    period: '2022 - 2023',
    specialty: 'Distributed Systems',
    thesis: 'Concurrent programming in Rust and Go: a comparative analysis.',
  },
  {
    degree: 'BEng in Information and Communication Technology',
    school: 'Poznań University of Technology',
    period: '2018 - 2022',
    specialty: 'Information and Communication Technology (ICT)',
    thesis: 'A general-purpose tool for modifying and visualizing dataset characteristics to improve machine-learning algorithm performance.',
  },
  {
    degree: 'IT Technician',
    school: 'Technical Secondary School, Toruń (ZSMEiE)',
    period: '2014 - 2018',
    specialty: 'Vocational qualification in information technology',
  },
];
