// All site copy lives here. Both designs (editorial + playful) read from this file.
// Images live in /public/images.

export type Media = {
  src: string
  alt: string
  caption?: string
  wide?: boolean
}

export type Section = {
  heading: string
  body: string[]
  points?: string[]
  media?: Media[]
}

export type Project = {
  slug: string
  title: string
  summary: string
  year: string
  role: string
  org: string
  tools: string[]
  link?: { label: string; href: string }
  color: string // used by the playful design
  status?: string
  cover?: Media
  sections: Section[]
}

export const profile = {
  name: 'Shafay Rameez',
  shortName: 'Shafay',
  headline: 'Product designer who builds what he designs.',
  intro: 'I design in Figma, build in React and test with real users. Head of Technology at The Graduate Route, research intern at CHISEL Lab, LUMS.',
  location: 'Lahore, Pakistan',
  email: '28100056@lums.edu.pk',
  linkedin: 'https://www.linkedin.com/in/shafay-rameez-80666524b/' as string, // add your LinkedIn URL to show the link
  cv: '/Shafay-Rameez-CV.pdf' as string, // add e.g. '/Shafay-Rameez-CV.pdf' (file in /public) to show the link
  bio: [
    'CS student at LUMS, class of 2028. I work across design, engineering and research, mostly in EdTech.',
    'I design before I build, then watch people use it and iterate. Outside work, I direct special projects at the LUMS Music Society and tutor O Level and SAT students.',
  ],
  skills: {
    Design: ['Figma', 'Wireframing', 'Prototyping', 'Design systems', 'User research', 'Usability testing'],
    Build: ['React', 'TypeScript', 'MERN stack', 'HTML & CSS', 'Flutter', 'Python', 'C++', 'SQL'],
    Ship: ['Vercel', 'Git', 'Domains & hosting', 'Automation', 'QA testing'],
  } as Record<string, string[]>,
}

export const projects: Project[] = [
  {
    slug: 'the-graduate-route',
    title: 'The Graduate Route',
    summary: 'Website, admin portal and automations for a university application consultancy. Designed and built solo, from scratch.',
    year: '2026',
    role: 'Head of Technology',
    org: 'The Graduate Route',
    tools: ['Figma', 'React', 'TypeScript', 'Vite', 'Vercel'],
    link: { label: 'thegraduateroute.com', href: 'https://www.thegraduateroute.com' },
    color: '#00A88F',
    cover: {
      src: '/images/tgr-home.webp',
      alt: 'The Graduate Route homepage: a signpost hero whose signs link to Services, About us, Testimonials and Book a session',
    
      wide: true,
    },
    sections: [
      {
        heading: 'Overview',
        body: ['TGR had no website when I joined in May 2026. I designed, built and deployed one on my own, plus the internal tools behind it.'],
      },
      {
        heading: 'Figma first',
        body: ['Every page started as a Figma mockup. The brand idea is a route: a signpost logo, dotted paths, speech bubbles and hand-drawn doodles.'],
        media: [
          { src: '/images/tgr-figma-booking.webp', alt: 'Figma mockup of the Book a session page with a speech-bubble intro and a long form', caption: 'Booking page mockup.' },
          { src: '/images/tgr-figma-faq.webp', alt: 'Figma mockup of the FAQ page with 18 accordion questions', caption: 'FAQ mockup.' },
        ],
      },
      {
        heading: 'Design system',
        body: ['A ten-colour palette and a doodle library used on every page. In code, these became tokens and reusable components.'],
        media: [{ src: '/images/tgr-design-system.webp', alt: 'Design system sheet: signpost logo, navigation bar, doodle library, ten-colour palette and footer', wide: true }],
      },
      {
        heading: 'Built',
        body: ['React, TypeScript and Vite on Vercel, with SEO and analytics.'],
        points: [
          'Services toggle between graduate and undergraduate',
          'University marquee and expandable student stories',
          'Contact page styled as an airmail postcard',
          'Self-sorting deadlines strip, blog and resources',
        ],
        media: [
          { src: '/images/tgr-services.webp', alt: 'Services page hero with a Graduate and Undergraduate toggle', caption: 'Services.' },
          { src: '/images/tgr-testimonials.webp', alt: 'Testimonials page with a marquee of universities', caption: 'Testimonials.' },
          { src: '/images/tgr-contact.webp', alt: 'Contact page styled as an airmail postcard with email, WhatsApp and Instagram cards', caption: 'Contact.', wide: true },
        ],
      },
      {
        heading: 'Admin portal',
        body: ['A portal to manage clients, invoices and payments. Invoices generate in PKR or USD, and reminders open a pre-filled WhatsApp chat. I also automated emails and session bookings.'],
        media: [{ src: '/images/tgr-admin.webp', alt: 'Admin dashboard with collected, outstanding, overdue and next-cycle cards and recent payments', caption: 'Amounts and names hidden.', wide: true }],
      },
    ],
  },
  {
    slug: 'sukrat-ai',
    title: 'Sukrat AI',
    summary: 'Student dashboard, course creation flow and marketing site for an AI tutoring platform.',
    year: '2026',
    role: 'Product design & UI/UX intern',
    org: 'Sukrat AI',
    tools: ['Figma', 'Prototyping', 'QA testing'],
    color: '#3C5BFF',
    cover: {
      src: '/images/sukrat-web-hero.webp',
      alt: 'Sukrat website hero surrounded by study doodles',
      wide: true,
    },
    sections: [
      {
        heading: 'Overview',
        body: ['A two-month internship, June to August 2026, covering product design, UI/UX and QA testing.'],
      },
      {
        heading: 'Student dashboard',
        body: ['Answers two questions at a glance: how am I doing, and what next? Mastery rings per course, study habits, strengths and weaknesses, and a one-click tutor session for the weakest topic.'],
        media: [{ src: '/images/sukrat-dashboard.webp', alt: 'Student dashboard with mastery stats, grade rings per course, a weekly study chart and strengths and weaknesses', wide: true }],
      },
      {
        heading: 'Course creation',
        body: ['A three-step flow for teachers: setup, outline, resources. The outline shows modules, topics and subtopics side by side, so a whole syllabus fits on one screen.'],
        media: [
          { src: '/images/sukrat-course-setup.webp', alt: 'Course setup step with a details form and resource uploads', caption: 'Setup and uploads.' },
          { src: '/images/sukrat-course-outline.webp', alt: 'Course outline step with columns for modules, topics and subtopics', caption: 'Outline and learning objectives.' },
        ],
      },
      {
        heading: 'Website',
        body: ['One page for three audiences: students, parents and schools. Doodles keep an AI product feeling like studying.'],
        media: [
          { src: '/images/sukrat-web-audiences.webp', alt: 'Website sections for students, parents and schools', caption: 'Audiences.' },
          { src: '/images/sukrat-web-features.webp', alt: 'Website features grid', caption: 'Features.' },
        ],
      },
    ],
  },
  {
    slug: 'seekho-sikhao',
    title: 'Seekho Sikhao',
    summary: 'An AI tutor for low-income students in Pakistan that guides them to answers instead of giving them away.',
    year: '2025–26',
    role: 'Design, development, field research',
    org: 'CHISEL Lab, LUMS',
    tools: ['Figma', 'Front-end', 'Field testing'],
    color: '#FFC531',
    status: 'Paper in progress',
    cover: {
      src: '/images/ss-workbook.webp',
      alt: 'Math session: the tutor explains multiplication in Roman Urdu, and the student works the answer by hand in a workbook panel',
      caption: 'The tutor explains, the student works it out by hand, and a hint is one tap away.',
      wide: true,
    },
    sections: [
      {
        heading: 'The problem',
        body: ['Chatbots hand students the answer, so they copy instead of learn. Seekho Sikhao withholds answers and walks students through each step.'],
      },
      {
        heading: 'Design',
        body: ['Built for primary school students on tablets. Replies come in Roman Urdu with read-aloud, and students can ask by typing, speaking or snapping a photo.'],
        media: [
          { src: '/images/ss-home.webp', alt: 'Home screen greeting the student with six subject cards', caption: 'Subjects.' },
          { src: '/images/ss-ask.webp', alt: 'Ask a question screen with type, speak and photo options and past questions', caption: 'Type, speak or photo.' },
        ],
      },
      {
        heading: 'Testing',
        body: ['We designed and built it ourselves, then tested an improved version in 3 schools. Students used ChatGPT first, then Seekho Sikhao, and we compared how they learned with each.'],
      },
      {
        heading: 'Now',
        body: ['Writing a research paper on the findings.'],
      },
    ],
  },
]

// Shorter items, shown as a list without their own page.
export const otherWork = [
  { title: 'Miyan Mithu', detail: "Designing and building a website for children's Punjabi books and stories. In progress." },
  { title: 'Stress screening game', detail: 'Gamified digital biomarkers of stress in Pakistani teens. CHISEL Lab, in progress.' },
  { title: 'Investomania', detail: 'Event site and live stock-trading simulation for 1,000+ participants. LUMS Entrepreneurial Society.' },
]

export const experience = [
  { role: 'Head of Technology', org: 'The Graduate Route', dates: 'May 2026 – now' },
  { role: 'Research Intern', org: 'CHISEL Lab, LUMS', dates: 'Jul 2026 – now' },
  { role: 'Director, Special Projects', org: 'Music Society of LUMS', dates: 'Jul 2026 – now' },
  { role: 'Product Design Intern', org: 'Sukrat AI', dates: 'Jun – Aug 2026' },
  { role: 'Team Manager, IT', org: 'LUMS Entrepreneurial Society', dates: 'Oct 2024 – May 2025' },
  { role: 'Private Tutor', org: 'O Level & SAT', dates: 'Aug 2024 – now' },
]
