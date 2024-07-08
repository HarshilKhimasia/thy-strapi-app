module.exports = [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "thy-test-bucket2.s3.eu-west-1.wasabisys.com", // Update with your Wasabi bucket URL
            "thy-test.global.ssl.fastly.net", // Fastly CDN URL
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "thy-test-bucket2.s3.eu-west-1.wasabisys.com", // Update with your Wasabi bucket URL
            "thy-test.global.ssl.fastly.net", // Fastly CDN URL
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
