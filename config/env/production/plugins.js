module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "@strapi/provider-upload-aws-s3",
      providerOptions: {
        s3Options: {
          accessKeyId: env("WASABI_ACCESS_KEY_ID"),
          secretAccessKey: env("WASABI_SECRET_ACCESS_KEY"),
          region: env("WASABI_REGION"),
          endpoint: "https://s3.eu-west-1.wasabisys.com", // Wasabi's S3 API endpoint
          params: {
            ACL: env("public-read"),
            Bucket: env("WASABI_BUCKET_NAME"),
          },
        },
        baseUrl: env("WASABI_CDN_URL"),
        basePath: "",
      },
    },
  },
});
