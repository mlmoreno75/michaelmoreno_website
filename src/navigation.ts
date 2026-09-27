import { getPermalink } from './utils/permalinks';
import type { CallToAction } from './types';

const LINKEDIN_URL = 'https://www.linkedin.com/in/michael-moreno';

// Same blue as the page CTAs. `btn-primary` sets `dark:bg-primary`, so the
// dark variants are required for the override to win in dark mode.
export const BLUE_BUTTON = [
  'bg-[rgb(1_97_239)] border-[rgb(1_97_239)] text-white',
  'hover:bg-[rgb(1_84_207)] hover:border-[rgb(1_84_207)]',
  'dark:bg-[rgb(1_97_239)] dark:border-[rgb(1_97_239)]',
  'dark:hover:bg-[rgb(1_84_207)] dark:hover:border-[rgb(1_84_207)]',
].join(' ');

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
  brandAction: {
    variant: 'primary',
    text: 'Connect on LinkedIn',
    href: LINKEDIN_URL,
    target: '_blank',
    icon: 'tabler:brand-linkedin',
    class: BLUE_BUTTON,
  } satisfies CallToAction,
  socialLinks: [{ ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: LINKEDIN_URL }],
  footNote: `© 2026 Michael Moreno`,
};
