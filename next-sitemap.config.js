/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.jusebsoftware.com/', // ⚠️ Cambia por tu dominio real en producción
    generateRobotsTxt: true, // Genera robots.txt
    generateIndexSitemap: true, // Sitemap index si hay varios
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
  };
  