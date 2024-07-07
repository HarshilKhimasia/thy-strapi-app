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
            Bucket: env("WASABI_BUCKET_NAME"),
          },
        },
        baseUrl: env("WASABI_CDN_URL"), // CDN URL for accessing images
      },
      actionOptions: {
        upload: {
          // Configure a custom upload handler to generate signed URLs
          handler: async (file, options) => {
            const AWS = require("aws-sdk");
            const s3 = new AWS.S3({
              accessKeyId: env("WASABI_ACCESS_KEY_ID"),
              secretAccessKey: env("WASABI_SECRET_ACCESS_KEY"),
              region: env("WASABI_REGION"),
            });

            // Generate signed URL with a 1-hour expiration
            const params = {
              Bucket: env("WASABI_BUCKET_NAME"),
              Key: file.hash + "-" + file.name,
              Expires: 3600, // 1 hour expiration time for the signed URL
              ACL: "private", // Ensure object ACL is private
            };

            // Get signed URL for uploading
            const uploadUrl = await s3.getSignedUrlPromise("putObject", params);
            return uploadUrl;
          },
        },
        delete: {}, // Optional: Add delete action options if needed
      },
    },
  },
});
