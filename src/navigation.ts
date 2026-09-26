import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'About', href: getPermalink('/#about') },
    { text: 'Expertise', href: getPermalink('/#expertise') },
    { text: 'Experience', href: getPermalink('/#experience') },
    { text: 'Accomplishments', href: getPermalink('/#accomplishments') },
    { text: 'Blog', href: getBlogPermalink() },
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
      title: 'Writing',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'RSS feed', href: getAsset('/rss.xml') },
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
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://arthelokyo.com"> Arthelokyo</a> · All rights reserved.
  `,
};
