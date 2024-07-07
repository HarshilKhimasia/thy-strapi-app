module.exports = ({ env }) => ({
  upload: {
    provider: "wasabi",
    providerOptions: {
      region: env("WASABI_REGION"),
      accessKeyId: env("WASABI_ACCESS_KEY_ID"),
      secretAccessKey: env("WASABI_SECRET_ACCESS_KEY"),
      bucket: env("WASABI_BUCKET_NAME"),
      cdnUrl: env("WASABI_CDN_URL"),
      params: {
        ACL: "private", // Optional: Set ACL for uploaded objects
      },
    },
  },
});
