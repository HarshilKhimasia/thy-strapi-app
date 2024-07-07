module.exports = ({ env }) => ({
  upload: {
    provider: "aws-s3",
    providerOptions: {
      accessKeyId: env("WASABI_ACCESS_KEY_ID"),
      secretAccessKey: env("WASABI_SECRET_ACCESS_KEY"),
      region: env("WASABI_REGION"),
      params: {
        Bucket: env("WASABI_BUCKET_NAME"),
      },
      baseUrl: env("WASABI_CDN_URL"), // Optional: if you're using a CDN
      basePath: "/", // Optional: base path for all uploads
    },
  },
});
