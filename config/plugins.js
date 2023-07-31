module.exports = ({ env }) => ({
  'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 5, // Default is 5
    },
  },
  seo: {
    enabled: true, 
  }, 
  menus: {
    config: {
      layouts: {
        menuItem: {
          link: [
            {
              input: {
                label: 'Bottom Border',
                name: 'bottom_border',
                type: 'select',
                options: [
                  {
                    label: 'Border',
                    value: 'border',
                  },
                  {
                    label: 'None',
                    value: 'none',
                  },
                ],
              },
              grid: {
                col: 6,
              },
            },
          ],
        },
      },
    },
  },
  "rest-cache": {
    config: {
      provider: {
        name: "memory",
        options: {
          max: 32767,
          maxAge: 3,
          updateAgeOnGet: false,
        },
      },
      strategy: {
        debug: true,
        maxAge: 3600,
        updateAgeOnGet: false,
        contentTypes: [
          // list of Content-Types UID to cache
          { contentType: "api::home-page.home-page", maxAge: 60*60*100 },
          { contentType: "api::footer.footer", maxAge: 60*60*100 },
          { contentType: "api::page.page", maxAge: 60*60*100 },
          { contentType: "api::dubai-ambassador.dubai-ambassador", maxAge: 60*60*100 },
        ],
      },
    },
  },
});