/** @type {import('next-sitemap').IConfig} */

const config = {
  siteUrl: "https://jamstack.aleksihuusko.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  outDir: "./public",
  sitemapFilename: "sitemap.xml",
  robotsTxtOptions: {
    output: "robots.txt",
  },
};

export default config;
