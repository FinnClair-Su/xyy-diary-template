import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Your Site Title',
  tagline: 'Your Site Tagline',
  favicon: 'img/fish-square-removebg-preview.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    // v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-domain.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'your-github-username', // Usually your GitHub org/user name.
  projectName: 'your-repo-name', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  /* i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  }, */

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/your-github-username/your-repo-name/tree/main/',
          showLastUpdateTime: false,
                      showLastUpdateAuthor: false,
        },
        blog: {
          path: 'blog',
          routeBasePath: 'blog',
          showReadingTime: true,
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
            defaultReadingTime({content, locale: 'zh-Hans', frontMatter, options: {wordsPerMinute: 200}}),
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          blogTitle: 'LLM Research & Practice',
          blogDescription: 'LLM Research & Practice',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/your-github-username/your-repo-name/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'learning',
        routeBasePath: 'learning',
        path: './learning',
        blogTitle: 'Learning Science & Cognition',
        blogDescription: 'Learning Science & Cognition',
        blogSidebarTitle: 'All posts',
        blogSidebarCount: 'ALL',
        feedOptions: {
          type: 'all',
          copyright: `Copyright © ${new Date().getFullYear()} Your Site Name`,
        },
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'life',
        routeBasePath: 'life',
        path: './life',
        blogTitle: 'Life Reflections',
        blogDescription: 'Life Reflections',
        blogSidebarTitle: 'All posts',
        blogSidebarCount: 'ALL',
        feedOptions: {
          type: 'all',
          copyright: `Copyright © ${new Date().getFullYear()} Your Site Name`,
        },
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.jpg',
    metadata: [
      {name: 'keywords', content: 'blog, personal site, template'},
      {name: 'description', content: 'A personal blog template built with Docusaurus'},
    ],
    navbar: {
      title: 'Your Site Title',
      logo: {
        alt: 'Your Site Logo',
        src: 'img/fish-square-removebg-preview.png',
        width: 32,
        height: 32,
      },
      items: [
        /*
        {
          to: '/life',
          label: '🌱 生活思考',
          position: 'left',
          activeBaseRegex: `/life/`,
        },
        {
          to: '/learning',
          label: '🧠 学习科学',
          position: 'left',
          activeBaseRegex: `/learning/`,
        },
        {
          to: '/blog',
          label: '🤖 LLM研究',
          position: 'left',
          activeBaseRegex: `/blog/`,
        },
        {
          type: 'docSidebar',
          sidebarId: 'knowledgeSidebar',
          position: 'left',
          label: '📚 知识库',
        },
        */
        {
          to: '/about',
          label: 'About me',
          position: 'right',
        },
        {
          to: '/friends',
          label: 'Friends',
          position: 'right',
        },
        /* {
          type: 'localeDropdown',
          position: 'right',
        }, */
        {
          href: 'https://github.com/your-github-username',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Categories',
          items: [
            {
              label: 'Life Reflections',
              to: '/life',
            },
            {
              label: 'Learning Science',
              to: '/learning',
            },
            {
              label: 'LLM Research',
              to: '/blog',
            },
            {
              label: 'Technical Guides',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: '学术相关',
          items: [
            {
              label: 'Google Scholar',
              href: 'https://scholar.google.com/citations?user=your-id',
            },
            {
              label: 'ORCID',
              href: 'https://orcid.org/your-id',
            },
            {
              label: 'ResearchGate',
              href: 'https://www.researchgate.net/profile/your-profile',
            },
          ],
        },
        {
          title: '联系方式',
          items: [
            {
              label: 'Email',
              href: 'mailto:your-email@example.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/your-github-username',
            },
            {
              label: 'Twitter',
              href: 'https://x.com/your-twitter-handle',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/your-linkedin-profile/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Your Site Name. Built with ❤️ and Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['bash', 'diff', 'json', 'python', 'yaml'],
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    // algolia: {
    //   // 如果需要搜索功能，可以配置Algolia
    //   apiKey: 'your-api-key',
    //   indexName: 'your-index-name',
    //   appId: 'your-app-id',
    // },
  } satisfies Preset.ThemeConfig,
};

export default config;
