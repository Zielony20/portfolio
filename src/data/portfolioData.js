export const personalData = {
  name: 'Piotr Sikora-Malach',
  title: 'Backend Engineer (Go) | DevOps & Cybersecurity',
  location: 'Poznań, Poland',
  photo: 'profile-placeholder.svg',
  photoAlt: 'Profile photo placeholder to be replaced with a personal photograph',
  email: 'piotrsikora98@gmail.com',
  phone: '+48 697 358 952',
  linkedin: 'https://www.linkedin.com/in/piotr-sikora/',
  github: 'https://github.com/Zielony20',
  bio: 'Since February 2023, I have worked as a Fullstack Software Engineer at Nokia on cybersecurity projects. I combine backend development in Go, Java and Python with DevOps and security. My work includes microservice development and adapting agent installation workflows to non-root requirements. I also created the entire bienvenidosprimavera.pl platform, from application code and API integrations to infrastructure.',
  stats: [
    { label: 'PrimaVera users', value: '~40' },
    { label: 'PrimaVera backend', value: 'Go / Gin / PostgreSQL' },
    { label: 'PrimaVera infrastructure', value: 'Kubernetes / Helm / Terraform' },
    { label: 'Nokia experience', value: 'Cybersecurity' },
  ],
};

export const featuredProjects = [
  {
    id: 'primavera',
    title: 'PrimaVera | bienvenidosprimavera.pl',
    subtitle: 'A language-school platform: backend, integrations and infrastructure',
    category: 'Backend · DevOps · Security',
    description: 'I created this platform for a Spanish-language school, serving approximately 40 users. It combines learning activities with school administration: a student application, PrimaPanel for teachers and administrators, a lesson calendar, timesheets and services for processing materials, backups and notifications. The technical overview below reflects the project code and configuration.',
    status: 'My own platform · approximately 40 users',
    link: 'https://bienvenidosprimavera.pl',
    cvDescription: 'Created the entire language-school platform, serving approximately 40 users, with a Go backend (Gin, GORM), PostgreSQL and React. The codebase includes REST APIs, JWT authentication and user roles, Google Drive, Brevo and Telegram integrations, LLM/TTS material processing, and Kubernetes, Helm, Terraform and Vault infrastructure.',
    highlights: [
      'Separate backend layers for business entities, repository interfaces, PostgreSQL implementations, services and HTTP handlers.',
      'Business workflows covering scheduling, attendance, timesheets, administrator approval and CSV exports.',
      'Supporting services and deployment scripts with backups, readiness checks and failure handling.',
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
        title: 'Integrations and background processing',
        description: 'Supporting services handle educational materials, communication and background work without blocking the user interface.',
        details: [
          'Google Drive API for material synchronization and backups, Brevo for email and a dedicated Telegram notification service.',
          'Material processing with LLM provider clients, PDF/DOCX parsers, TTS queues and question generation.',
          'Qdrant and object-storage modules for image assets, enabled according to service configuration.',
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
    tags: ['Go (Golang)', 'Gin', 'GORM', 'PostgreSQL', 'REST API', 'React', 'JWT', 'TOTP', 'Docker', 'Kubernetes', 'Helm', 'Terraform', 'Vault', 'Cloudflare Tunnel', 'Google Drive API', 'Brevo', 'Telegram API', 'LLM / TTS', 'Vitest', 'Playwright'],
  },
];

export const skillsCategories = [
  {
    title: 'Backend & Distributed Systems',
    skills: ['Go / Golang', 'Java', 'Python', 'Lua', 'Rust (academic experience)', 'Gin', 'Spring Boot', 'FastAPI', 'REST API', 'GORM', 'Distributed Systems', 'Business domain modeling', 'Data access abstraction'],
  },
  {
    title: 'DevOps & Infrastructure',
    skills: ['Docker', 'Kubernetes', 'Helm', 'Terraform / IaC', 'KinD', 'Cloudflare Tunnel', 'Deployment automation', 'Ansible', 'kpt'],
  },
  {
    title: 'Cybersecurity',
    skills: ['eBPF', 'Cilium', 'NetworkPolicy', 'HashiCorp Vault', 'JWT', 'OAuth 2.0', '2FA'],
  },
  {
    title: 'Testing & Code Quality',
    description: 'Testing complete workflows, debugging failures and reviewing changes for production-ready configuration.',
    skills: ['Unit Testing', 'Integration Testing', 'End-to-End Testing', 'Go testing', 'Playwright', 'Vitest', 'Code Review', 'Debugging'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'Cassandra', 'Qdrant'],
  },
  {
    title: 'Integrations',
    skills: ['API integrations', 'Google Drive API', 'Brevo', 'Telegram API', 'LLM APIs', 'Text-to-Speech (TTS)'],
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
    description: 'Software development across cybersecurity projects. English-speaking working environment, with English at B2 level (self-assessed).',
    bulletPoints: [
      'Adapted an agent installation process to a customer requirement for non-root execution by identifying commands requiring sudo and limiting elevated privileges.',
      'Designed and implemented microservices, fixed bugs, prepared tests and technical documentation, and participated in code reviews.',
      'Proposed architectural solutions and adapted installation workflows to evolving deployment mechanisms.',
      'Worked with Java, Go, Python, Lua, Ansible, Kubernetes, Helm, Terraform and kpt, with occasional use of eBPF.',
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
