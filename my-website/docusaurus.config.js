import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'eduTechExp',
  tagline: 'Desvendando o complexo para impulsionar a inovação digital.',
  favicon: 'img/eduTechExp-logo.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'eduTechExp',
        logo: {
          alt: 'My Site Logo',
          src: 'img/eduTechExp-logo-black.svg',
          srcDark: 'img/eduTechExp-logo.svg',
        },
        items: [
          { to: '/sobre-mim', label: 'Sobre Mim', position: 'left' },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Explorar',
          },

          {
            href: 'https://github.com/eduesplinio/blog-eduTechExp',
            label: 'GitHub',
            position: 'right',
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
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/eduardo-esplinio-b16ba3274/',
              },
              {
                label: 'E-mail',
                href: 'mailto:eduesplinio.dat@gmail.com',
              }
            ],
          },
          {
            title: 'Explorar',
            items: [
              {
                label: 'Projetos',
                href: '/docs/category/projetos',
              },
              {
                label: 'Cursos',
                href: '/docs/category/cursos',
              },
              {
                label: 'Desafios',
                href: '/docs/category/desafios',
              },
              {
                label: "Tecnologias",
                href: '/docs/category/tecnologias',
              }
            ],
          },
          {
            title: 'Mais',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/eduesplinio',
              },
            ],
          },
        ],

        copyright: `Copyright © ${new Date().getFullYear()} eduTechExp.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
