module.exports = {
  title: 'P4 One Documentation',
  // tagline: ' tagline of my site',
  url: 'https://www.perforce.com',
  baseUrl: '/helix-core/server-apps/p4one/',
  //baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.svg',
  noIndex: false,
  organizationName: 'Perforce', // Usually your GitHub org/user name.
  projectName: 'P4One-docs', // Usually your repo name.
  themeConfig: {
    colorMode: {
      switchConfig: {
        darkIcon: '💡',
        lightIcon: '🌙'
      }
    },
    navbar: {
      title: 'Perforce P4 One Documentation',
      logo: {
        alt: 'Perforce P4 One',
        href: 'https://www.perforce.com/',
        src: 'logo.png',
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
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Perforce Inc.`,
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
              label: 'v2025.1 Preview'
            },
          },
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
