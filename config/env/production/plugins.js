module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        s3Options: {
          credentials: {
            accessKeyId: env("WASABI_ACCESS_KEY_ID"),
            secretAccessKey: env("WASABI_SECRET_ACCESS_KEY"),
          },
          region: env("WASABI_REGION"),
          params: {
            ACL: "private", // Set ACL to private to restrict access
            Bucket: env("WASABI_BUCKET_NAME"),
          },
        },
        baseUrl: env("WASABI_CDN_URL"), // Optional: if using a CDN
        basePath: "/", // Optional: base path for all uploads
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
