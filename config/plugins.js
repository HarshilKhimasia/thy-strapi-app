module.exports = ({ env }) => ({
  upload: {
    provider: "wasabi",
    providerOptions: {
      region: "eu-west-1",
      accessKeyId: "UD685VP1TOT5UNIMOMZG",
      secretAccessKey: "EqOEYVhJXQz4RwzDP5VuHtTl6rS8ycI6v3JDQmHD",
      bucket: "thy-test-bucket2",
      cdnUrl: "https://thy-test.global.ssl.fastly.net",
      params: {
        ACL: "public-read", // Optional: Set ACL for uploaded objects
      },
    },
  },
});
