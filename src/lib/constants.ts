export const SITE_PROPS = {
  siteName: 'gBoole01 💻',
  title: 'gBoole01 💻',
  description: 'Site Web de gBoole01',
  url: 'https://g-boole-01.com',
  locale: 'fr',
  author: 'gBoole01',
}

export const LEGALS_PROPS = {
  siteUrl: 'g-boole-01.com',
  editorName: 'gBoole01',
  editorMail: '68549849+gBoole01@users.noreply.github.com',
  publisherName: 'Vercel Inc.',
  publisherAddress: '340 S Lemon Ave #4133 Walnut, CA 91789',
  publisherMail: 'privacy@vercel.com',
}

export const SOCIAL_LINKS = {
  github: 'https://github.com/gBoole01',
  stackoverflow: 'https://stackoverflow.com/users/19291891/gboole01',
  buymeacoffee: 'https://www.buymeacoffee.com/gBoole01',
}

export const BADGES_URL = {
  typescript:
    'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
  javascript:
    'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
  php:
    'https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white',
  csharp:
    'https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white',
}

type Skills = {
  frontEnd: string[]
  backEnd: string[]
  CMS: string[]
  devTools: string[]
  languages: string[]
}

const skills: Skills = {
  frontEnd: [
    'HTML5',
    'CSS3',
    'Javascript',
    'Typescript',
    'Angular',
    'React',
    'Sass',
    'PostCSS',
    'Bootstrap',
    'Tailwind',
  ],
  backEnd: [
    'PHP',
    'Node.js',
    'SQL',
    'ORM',
    'ODM',
    'Services Web (REST, GraphQL)',
    'Base de données',
    'Système de Cache',
    'Websockets',
  ],
  CMS: ['WordPress', 'PrestaShop'],
  devTools: [
    'Linux - Debian',
    'CLI - Bash, Zsh',
    'Git, Github',
    'Docker, Machine Virtuelle',
    'CI/CD',
    'Tests (Unitaires, E2E)',
    'Gestionnaires de paquets',
    'Vite, Webpack',
    'Prettier, ESLint',
  ],
  languages: [
    'Français (fr-FR): Natif ',
    'Anglais (en-US/en-GB): Courant',
    'Espagnol (es-ES): Notions',
  ],
}

type Experience = {
  startDate: string
  endDate?: string
  company: string
  title: string
  duration: string
  missions: string[]
  type: string
}

const experiences: Experience[] = [
  {
    startDate: '2021',
    endDate: '2022',
    company: 'Agence Web',
    title: 'Full Stack Developer',
    duration: '1 an',
    type: 'CDI',
    missions: [
      "Maintenance et développement de nouvelles fonctionnalités d'une application de réservation de restaurant de de système CRM en Javascript (Angular/Node.js)",
      "Mise à niveau d'un site PrestaShop (1.7) et de ses modules dédiés en appliquant le pattern CQRS (parrainage, présentation des domaines viticoles, ventes privées, etc..)",
      'Maintenance et développement de modules PrestaShop et WordPress sur différents sites (Groupe Immobilier, Association, Commerçants, Sites vitrines, etc..)',
    ],
  },
  {
    startDate: '2020',
    company: 'Agence Web',
    title: 'Full Stack Developer',
    duration: '2 mois',
    type: 'Stage',
    missions: [
      "Développement d`une application PHP/Javascript permettant le suivi en direct des résultats d'une compétition sportive",
      "Développement de modules WordPress sur le site web d'une association sportive (création de profils utilisateurs, adhésion et règlement des licences)",
    ],
  },
  {
    startDate: '2016',
    endDate: '2018',
    company: 'Établissement de restauration rapide',
    title: 'Manager',
    duration: '2 ans',
    type: 'CDI',
    missions: [
      'Assurer la qualité des produits et services',
      'Former, motiver et superviser une équipe',
      "Assurer l'ouverture et la fermeture du restaurant",
    ],
  },
]

type Diploma = {
  year: string
  type: string
  title: string
}

const diplomas: Diploma[] = [
  {
    year: '2012',
    type: 'Bac Technologique',
    title: 'Gestion spécialité "Marketing"',
  },
  {
    year: '2020',
    type: 'Titre RNCP (Bac +2)',
    title: 'Développeur Web & Web Mobile',
  },
  {
    year: '2021',
    type: 'Certification Qualité Web',
    title: 'Opquast - Niveau Expert',
  },
]

const interests = ['Next.js', 'Test Driven Development', 'Big Data']

export const RESUME = {
  skills,
  experiences,
  diplomas,
  interests,
}
