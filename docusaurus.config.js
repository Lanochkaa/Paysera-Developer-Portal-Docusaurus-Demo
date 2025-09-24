// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Paysera API Documentation',
  tagline: 'Complete guide to integrating with Paysera payment APIs',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://lanochkaa.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Paysera-Developer-Portal-Docusaurus-Demo/',

  // GitHub pages deployment config.
  organizationName: 'paysera',
  projectName: 'api-documentation',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'lt'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/paysera/api-documentation/edit/main/',
          routeBasePath: '/', // Serve docs at root
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/paysera/api-documentation/edit/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  plugins: [
    // Google Analytics plugin removed to prevent errors with placeholder ID
    // Add back when you have a real tracking ID
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/paysera-logo.svg',
      navbar: {
        title: 'Paysera API',
        logo: {
          alt: 'Paysera Logo',
          src: '/img/paysera-logo.svg',
          href: '/',
          width: 32,
          height: 32,
        },
        items: [
          {
            to: '/intro',
            label: 'Documentation',
            position: 'left',
          },
          {
            to: '/getting-started',
            label: 'Getting Started',
            position: 'left',
          },
          {
            to: '/features',
            label: 'Features',
            position: 'left',
          },
          {
            to: '/faq',
            label: 'FAQ',
            position: 'left',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://developers.paysera.com',
            label: 'Developers Portal',
            position: 'right',
          },
          {
            href: 'https://github.com/paysera',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/getting-started',
              },
              {
                label: 'API Features',
                to: '/features',
              },
              {
                label: 'FAQ',
                to: '/faq',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/paysera',
              },
              {
                label: 'Developer Forum',
                href: 'https://developers.paysera.com/forum',
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/company/paysera',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Developer Updates',
                to: '/blog',
              },
              {
                label: 'Paysera Website',
                href: 'https://paysera.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/paysera',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Paysera. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['php', 'java', 'csharp', 'python', 'bash'],
      },
      // Algolia search disabled for demo - requires real API keys
      // To enable search, configure with your Algolia credentials:
      // algolia: {
      //   appId: 'YOUR_APP_ID',
      //   apiKey: 'YOUR_SEARCH_API_KEY',
      //   indexName: 'paysera-api-docs',
      //   contextualSearch: true,
      //   searchPagePath: 'search',
      // },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

export default config;
