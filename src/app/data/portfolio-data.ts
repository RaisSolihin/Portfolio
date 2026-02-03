/**
 * Portfolio content — edit this file to fill in your own data.
 * All pages (Home, About, Skills, Experience, Education, Resume, Contact) read from here.
 * Hero primaryCtaLink and secondaryCtaLink are routes, e.g. '/skills' and '/contact'.
 */

export interface HeroData {
  name: string;
  tagline: string;
  shortDescription: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

export interface AboutData {
  title: string;
  paragraphs: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

/** Detailed descriptions for each skill area (shown below the skill cards) */
export interface SkillDetailGroup {
  title: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  notes?: string;
}

export interface ContactData {
  email: string;
  phone?: string;
  linkedIn?: string;
  github?: string;
  location?: string;
}

export interface ResumeEducationItem {
  institution: string;
  period: string;
  degree: string;
  courses?: string;
}

export interface ResumeExperienceRole {
  role: string;
  period?: string;
  bullets: string[];
}

export interface ResumeExperienceEntry {
  company: string;
  location?: string;
  period?: string;
  roles: ResumeExperienceRole[];
}

export interface ResumeVolunteeringItem {
  title: string;
  items: string[];
}

export interface ResumeContent {
  summary: string;
  education: ResumeEducationItem[];
  experience: ResumeExperienceEntry[];
  technicalSkills: string[];
  volunteering: ResumeVolunteeringItem[];
  language: string[];
}

export interface ResumeData {
  title: string;
  description?: string;
  /** URL to your resume PDF (e.g. Google Drive link, or path like /assets/resume.pdf) */
  pdfUrl: string;
  /** Optional label for the download button */
  downloadButtonText?: string;
  /** Full resume content for the resume page */
  content?: ResumeContent;
}

export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  skills: SkillGroup[];
  skillDetails: SkillDetailGroup[];
  experience: ExperienceItem[];
  education: EducationItem[];
  resume: ResumeData;
  contact: ContactData;
}

export const PORTFOLIO_DATA: PortfolioData = {
  hero: {
    name: 'Rais Solihin',
    tagline: 'Web Developer with hands-on experience in development, maintaining and improving web applications',
    shortDescription:
      'Professional experience in Laravel, MySQL, and GitHub, working on government systems like Elesen 2.0 for the Ministry of Fisheries.',
    primaryCtaText: 'Know me well',
    primaryCtaLink: '/about',
    secondaryCtaText: "Let's Talk",
    secondaryCtaLink: '/contact',
  },
  about: {
    title: 'About Me',
    paragraphs: [
      "I'm a Software Developer with hands-on experience building web applications using Laravel, MySQL, HTML, CSS, and JavaScript. I've worked on a real production system, Elesen 2.0, a government web application for the Ministry of Fisheries, where I handled both frontend and backend tasks, bug fixing, testing, client demos, and deployment on Linux servers using Apache. I work comfortably in a team using GitHub and I'm currently learning Angular to sharpen my frontend skills and keep up with industry demand, while continuously improving through real-world projects and self-learning.",
    ],
  },
  skills: [
    {
      title: 'Web Development',
      items: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'RESTful APIs'],
    },
    {
      title: 'Tools & Frameworks',
      items: ['Laravel', 'Angular (Learning)', 'Git', 'GitHub', 'Apache'],
    },
    {
      title: 'Technical Others',
      items: ['System Testing', 'Bug Fixing', 'System Analysis', 'Graphic Design'],
    },
  ],
  skillDetails: [
    {
      title: 'Web Development',
      items: [
        'Languages: Proficient in HTML, CSS, JavaScript, and PHP.',
        'Database Management: Experienced in using MySQL for managing government web systems and general database management systems.',
        'Frontend & Backend Development: Experienced in both frontend and backend development, including RESTful API integration.',
        'Web Architecture: Knowledgeable in MVC (Model-View-Controller) architecture.',
      ],
    },
    {
      title: 'Tools & Frameworks',
      items: [
        'Frameworks: Professional experience with Laravel (specifically for the Elesen 2.0 system) and actively learning Angular.',
        'Version Control: Skilled in Git and GitHub, including feature branches, pull requests, and merge conflict resolution.',
        'Server & Deployment: Beginner experience with Linux and Apache for basic deployment and configuration.',
      ],
    },
    {
      title: 'Others',
      items: [
        'Technical Skills: System Testing and writing Test Scripts; Bug Fixing and troubleshooting; Client Presentation and demonstrations; System Analysis and Graphic Design.',
        'Core Concepts: Strong foundation in Data Structures & Algorithms, Object-Oriented Programming (OOP), and Information Security & Assurance.',
        'Soft Skills: Leadership, project coordination, and collaborative problem-solving developed through volunteering and competitions like the Minecraft Kampus Barakah Challenge.',
      ],
    },
  ],
  experience: [
    {
      role: 'Junior Software Engineer – Level 2',
      company: 'EBI Resources Sdn. Bhd.',
      period: 'February 2025 – January 2026',
      description: [
        'System Development: Developed frontend and backend features for Elesen 2.0, a government web system for the Ministry of Fisheries.',
        'Technical Implementation: Implemented modules using Laravel, MySQL, HTML, CSS, and JavaScript.',
        'API Integration: Developed and integrated RESTful APIs to facilitate communication between the frontend and backend.',
        'Collaboration: Utilized GitHub for team collaboration, managing feature branches, pull requests, and code merging.',
        'Maintenance: Performed bug fixing and system improvements on a live production system used by government stakeholders.',
        'Quality Assurance: Conducted system testing and prepared comprehensive test scripts and documentation.',
        'Stakeholder Engagement: Participated in progress meetings and conducted system demonstrations for clients.',
        'Server Management: Assisted in basic deployment and configuration on Linux servers using Apache.',
      ],
    },
    {
      role: 'Junior Software Engineer – Level 1 (Internship)',
      company: 'EBI Resources Sdn. Bhd.',
      period: 'Internship',
      description: [
        'Supported web application development using Laravel and MySQL.',
        'Assisted with frontend tasks, bug fixing, and documentation.',
        'Applied basic secure coding practices, including input validation and authentication handling.',
      ],
    },
    {
      role: 'Substitute Teacher (Part Time)',
      company: 'SRA Al-Syatibi, Cheras',
      period: 'August 2022 – October 2022',
      description: [
        'Managed classroom behavior and conducted lessons for primary school students.',
        'Adapted teaching methods to suit diverse learning styles while ensuring the continuation of the academic curriculum.',
      ],
    },
    {
      role: 'Front of House (FOH) Crew',
      company: 'GastroHub, Nilai',
      period: 'August 2024 – January 2025',
      description: [
        'Handled customer orders, cash transactions, and problem-solving during busy periods.',
        'Collaborated with the team to ensure smooth daily operations and high-quality service.',
      ],
    },
  ],
  education: [
    {
      degree: 'Bachelor of Computer Science (Hons) – Information Security & Assurance',
      institution: 'Universiti Sains Islam Malaysia (USIM)',
      period: 'Oct 2021 – Sept 2025',
      notes: 'Relevant Courses: Basic Programming, Database Management System, Software Engineering, Object-Oriented Programming, Data Structure & Algorithm, System Analyst, and Graphic Design.',
    },
    {
      degree: 'Foundation in Physical Science & Technology',
      institution: 'Tamhidi Universiti Sains Islam Malaysia (USIM)',
      period: 'Aug 2020 – May 2021',
      notes: 'Relevant Courses: Mathematics, Physics, Chemistry, English for Academic Purposes, Basic Computer & IT, Scientific Communication, and Laboratory Skills.',
    },
  ],
  resume: {
    title: 'Resume',
    description: 'Download my full resume for a detailed overview of my experience, skills, and education.',
    pdfUrl: 'RESUME - RAIS SOLIHIN.pdf',
    downloadButtonText: 'Download resume (PDF)',
    content: {
      summary:
        "Front-End Developer with professional experience in Laravel, MySQL, HTML, CSS, JavaScript, and GitHub, working on a government web system (Elesen 2.0 – Ministry of Fisheries). Experienced in frontend & backend development, RESTful API integration, system testing, client demos, bug fixing, and basic Linux server deployment. Actively learning Angular to meet modern frontend development requirements.",
      education: [
        {
          institution: 'Universiti Sains Islam Malaysia (USIM)',
          period: 'Oct 2021 – Sept 2025',
          degree: 'Bachelor of Computer Science (Hons) – Information Security & Assurance',
          courses:
            'Basic Programming, Database Management System, Software Engineering, Object-Oriented Programming, Data Structure & Algorithm, System Analyst, Graphic Design.',
        },
        {
          institution: 'Tamhidi Universiti Sains Islam Malaysia (USIM)',
          period: 'Aug 2020 – May 2021',
          degree: 'Foundation in Physical Science & Technology',
          courses:
            'Mathematics, Physics, Chemistry, English for Academic Purposes, Basic Computer & IT, Scientific Communication, Laboratory Skills.',
        },
      ],
      experience: [
        {
          company: 'EBI Resources Sdn. Bhd.',
          period: 'Feb 2025 – Jan 2026',
          roles: [
            {
              role: 'Junior Software Engineer – Level 2',
              bullets: [
                'Developed frontend and backend features for Elesen 2.0, a government web system for the Ministry of Fisheries.',
                'Implemented modules using Laravel, MySQL, HTML, CSS, and JavaScript.',
                'Developed and integrated RESTful APIs for frontend–backend communication.',
                'Used GitHub for team collaboration, feature branching, pull requests, and code merging.',
                'Performed bug fixing and improvements on a production system used by government stakeholders.',
                'Conducted system testing and prepared test scripts and documentation.',
                'Participated in client demos and progress meetings.',
                'Assisted in deployment and configuration on Linux servers using Apache (beginner level).',
              ],
            },
            {
              role: 'Junior Software Engineer – Level 1 (Internship)',
              bullets: [
                'Supported web application development using Laravel and MySQL.',
                'Assisted in frontend tasks, bug fixing, and documentation.',
                'Used GitHub for source control and project updates.',
                'Applied basic secure coding practices such as input validation and authentication handling.',
              ],
            },
          ],
        },
        {
          company: 'SRA Al-Syatibi, Cheras, Kuala Lumpur',
          period: 'Aug 2022 – Oct 2022',
          roles: [
            {
              role: 'Substitute Teacher (Part Time)',
              bullets: [
                'Conducted lessons and supervised classes, ensuring smooth continuation of academic and religious curriculum.',
                'Managed classroom behavior and fostered a positive and disciplined learning environment.',
                'Adapted teaching methods to meet diverse learning styles of primary school students.',
                'Developed communication, leadership, and classroom management skills.',
              ],
            },
          ],
        },
        {
          company: 'GastroHub, Nilai, Negeri Sembilan',
          period: 'Aug 2024 – Jan 2025',
          roles: [
            {
              role: 'Front of House (FOH) Crew',
              bullets: [
                'Assisted customers with orders and ensured high-quality service to enhance customer satisfaction.',
                'Collaborated with team members to maintain smooth daily operations and a clean service environment.',
                'Handled cash transactions, order management, and basic problem-solving during busy periods.',
              ],
            },
          ],
        },
      ],
      technicalSkills: [
        'Frontend: HTML, CSS, JavaScript.',
        'Frontend (Learning): Angular (components, services, REST API integration).',
        'Backend: PHP (Laravel), RESTful APIs.',
        'Database: MySQL.',
        'Version Control: Git, GitHub (feature branches, pull requests, merge conflict resolution).',
        'Server & Deployment: Linux, Apache (Beginner – basic deployment and configuration).',
        'Others: System Testing, Test Scripts, Client Presentation, Bug Fixing.',
      ],
      volunteering: [
        {
          title: 'SUFA (Sukan Fakulti) – Athlete',
          items: ['Developed teamwork, discipline, and commitment through regular participation in university sports events.'],
        },
        {
          title: 'Bit and Byte Tech Competitions (10.0 / 11.0 / 12.0)',
          items: ['Participated in programming and tech challenges, enhancing problem-solving and creative thinking skills.'],
        },
        {
          title: 'Minecraft Kampus Barakah Challenge 2023',
          items: ['Applied design thinking and collaborative problem-solving in a creative tech challenge.'],
        },
        {
          title: 'Misi Jelajah Kesukarelawanan Kuala Pilah 2023',
          items: ['Volunteered as committee member, strengthening leadership and project coordination skills.'],
        },
        {
          title: 'Forum ISAS 2022–2024',
          items: ['Engaged in academic forums, improving communication and presentation abilities.'],
        },
      ],
      language: ['Bahasa Melayu – Advanced', 'English – Advanced', 'Arabic – Basic'],
    },
  },
  contact: {
    email: 'raissolihin1910@gmail.com',
    phone: '+6011-7030 5450',
    linkedIn: 'https://www.linkedin.com/in/raissolihin/',
    github: '', // Add your GitHub profile URL when ready
    location: 'City, Country',
  },
};
