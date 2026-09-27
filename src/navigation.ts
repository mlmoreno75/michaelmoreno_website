import { getPermalink } from './utils/permalinks';

const LINKEDIN_URL = 'https://www.linkedin.com/in/michael-moreno';

export const headerData = {
  links: [
    { text: 'About', href: getPermalink('/#about') },
    { text: 'Expertise', href: getPermalink('/#expertise') },
    { text: 'Experience', href: getPermalink('/#experience') },
    { text: 'Skills', href: getPermalink('/#skills') },
    { text: 'Accomplishments', href: getPermalink('/#accomplishments') },
  ],
  actions: [{ text: 'Message Me', href: getPermalink('/#contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Site',
      links: [
        { text: 'About', href: getPermalink('/#about') },
        { text: 'Expertise', href: getPermalink('/#expertise') },
        { text: 'Experience', href: getPermalink('/#experience') },
        { text: 'Accomplishments', href: getPermalink('/#accomplishments') },
      ],
    },
    {
      title: 'Connect',
      links: [
        { text: 'Message me', href: getPermalink('/#contact') },
        { text: 'Download résumé', href: '/resume.pdf' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [{ ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: LINKEDIN_URL }],
  footNote: `© 2026 Michael Moreno`,
};
