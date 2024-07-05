module.exports = ({ env }) => ({
  upload: {
    provider: "aws-s3",
    providerOptions: {
      accessKeyId: env("WASABI_ACCESS_KEY_ID"),
      secretAccessKey: env("WASABI_ACCESS_SECRET"),
      region: env("WASABI_REGION"),
      endpoint: env("WASABI_ENDPOINT"), // This is important for Wasabi
      s3ForcePathStyle: true, // Required for Wasabi
      params: {
        Bucket: env("WASABI_BUCKET"),
      },
    },
  },
});
