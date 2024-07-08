module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "local",
      providerOptions: {
        sizeLimit: 1000000, // Optional: set size limit for local uploads
      },
    },
  },
});
