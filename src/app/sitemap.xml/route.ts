export const dynamic = 'force-static';

export function GET() {
  const baseUrl = 'https://nanosofttech.ca';
  const currentDate = new Date().toISOString();
  
  const services = [
    'custom-software-development',
    'legacy-system-modernization', 
    'cloud-migration-services',
    'net-modernization',
    'net-migration',
    'digital-transformation',
    'devops-implementation',
    'ai-integration-solutions',
    'end-to-end-it-solutions'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  ${services.map(service => `
  <url>
    <loc>${baseUrl}/services/${service}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}