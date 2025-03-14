import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'eduTech Exp',
  tagline: 'Desvendando o complexo para impulsionar a inovação digital.',
  favicon: 'img/favicon.svg',

  url: 'https://edutechexp.me',
  baseUrl: '/',
  projectName: 'eduTechExp',
  organizationName: 'eduesplinio',
  trailingSlash: false,

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  deploymentBranch: 'gh-pages',
  projectName: 'eduTechExp',
  organizationName: 'eduesplinio',

  i18n: {
    defaultLocale: 'pt',
    locales: ['pt'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/background.mp4',
      metadata: [
        { name: 'og:description', content: 'Desvendando o complexo para impulsionar a inovação digital.' },
        { name: 'og:image', content: 'img/background.png' },
      ],
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'eduTech Exp',
        logo: {
          alt: 'My Site Logo',
          src: 'img/eduTechExp-logo-black.svg',
          srcDark: 'img/eduTechExp-logo.svg',
        },

        items: [
          { to: '/sobre-mim', label: 'Sobre Mim', position: 'left' },
          { to: '/projetos', label: 'Projetos', position: 'left' },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },

          {
            href: 'https://github.com/eduesplinio/eduTechExp',
            position: 'right',
            className: 'navbar-icon navbar-icon-github',
            'aria-label': 'GitHub repository',
            html: `<svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 496 512"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
            </svg>`,
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Conhecer',
            items: [
              {
                label: 'Sobre mim',
                to: '/sobre-mim',
              },
              {
                label: 'E-mail',
                href: 'mailto:eduesplinio.dat@gmail.com',
              }
            ],
          },
          {
            title: 'Navegar',
            items: [
              {
                label: 'Projetos',
                to: '/projetos',
              },
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'Docs',
                href: '/docs/introducao',
              },
            ],
          },
          {
            title: 'Mais',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/eduesplinio',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/eduardo-esplinio-b16ba3274/',
              },
            ],
          },
        ],

        copyright: `Copyright © ${new Date().getFullYear()} eduTech Exp.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;