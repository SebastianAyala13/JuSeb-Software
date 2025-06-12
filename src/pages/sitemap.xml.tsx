import { GetServerSideProps } from 'next';

const BASE_URL = 'https://juseb-software.com';

const staticPages = [
  '',
  '/servicios',
  '/proyectos',
  '/blog',
  '/contacto',
];

function getSitemapXml() {
  const urls = staticPages
    .map(
      (path) => `<url><loc>${BASE_URL}${path}</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>`
    )
    .join('');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'application/xml');
  res.write(getSitemapXml());
  res.end();
  return { props: {} };
};

export default function Sitemap() {
  return null;
}
