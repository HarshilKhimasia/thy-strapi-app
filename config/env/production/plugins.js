// config/env/production/plugins.js
module.exports = ({ env }) => ({
  upload: {
    providerOptions: {
      cdnUrl: "https://thy-test.global.ssl.fastly.net",
    },
  },
});
