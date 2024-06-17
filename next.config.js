/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wordpress.aleksihuusko.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
        port: "",
      },
    ],
  },
};
