module.exports = {
  title: 'Snowtrack Documentation',
  // tagline: ' tagline of my site',
  url: 'https://www.snowtrack.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://www.snowtrack.io/wp-content/uploads/2020/12/cropped-logo-1-32x32.png',
  noIndex: true,
  organizationName: 'Snowtrack', // Usually your GitHub org/user name.
  projectName: 'Snowtrack-docs', // Usually your repo name.
  themeConfig: {
    colorMode: {
      switchConfig: {
        darkIcon: '💡',
        lightIcon: '🌙',
      },
    },
    navbar: {
      title: 'Snowtrack Documentation',
      logo: {
        alt: 'Snowtrack',
        href: 'https://www.snowtrack.io/',
        src: 'static/img/logo.png',
        target: '_self'
      },
      items: [
        /*
        {
          type: 'docsVersionDropdown',

          //// Optional
          position: 'left',
          // Add additional dropdown items at the beginning/end of the dropdown.
          dropdownItemsBefore: [],
          dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
          // Do not add the link active class when browsing docs.
          dropdownActiveClassDisabled: true,
          docsPluginId: 'default',
        },
        */
        /*
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
        */
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
