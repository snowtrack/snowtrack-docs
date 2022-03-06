module.exports = {
  title: 'Snowtrack Documentation',
  // tagline: ' tagline of my site',
  url: 'https://www.snowtrack.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://www.snowtrack.io/images/favicons/favicon.ico',
  noIndex: true,
  organizationName: 'Snowtrack', // Usually your GitHub org/user name.
  projectName: 'Snowtrack-docs', // Usually your repo name.
  themeConfig: {
    colorMode: {
      switchConfig: {
        darkIcon: '💡',
        lightIcon: '🌙'
      }
    },
    navbar: {
      title: 'Snowtrack Documentation',
      logo: {
        alt: 'Snowtrack',
        href: 'https://www.snowtrack.io/',
        src: 'https://www.snowtrack.io/logo.png',
        target: '_self'
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
          docsPluginId: 'default',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: 'docs/',
            },
            {
              label: 'FAQs',
              to: 'docs/faqs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/snowtrack_io',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCrbtXrXLpmloZjQAnMOP9cg',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/snowtrack',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Snowtrack Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          lastVersion: 'current',
          versions: {
            current: {
              label: 'v0.10 (Cap Gaspé)'
            },
            '0.9': {
              label: 'v0.9 (Summer Woods)',
              path: '0.9',
            },
          },
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Snowtrack/snowtrack-docs/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
