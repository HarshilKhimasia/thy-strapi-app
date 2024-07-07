module.exports = ({ env }) => ({
  upload: {
    provider: "wasabi",
    providerOptions: {
      region: "eu-west-1",
      accessKeyId: env("WASABI_ACCESS_KEY_ID"),
      secretAccessKey: env("WASABI_SECRET_ACCESS_KEY"),
      bucket: env("WASABI_BUCKET"),
      cdnUrl: env("CDN_URL"),
      params: {
        ACL: "public-read", // Optional: Set ACL for uploaded objects
      },
    },
  },
});
