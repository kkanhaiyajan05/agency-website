export const dynamic = 'force-static';

export function GET() {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://nanosofttech.ca/sitemap.xml`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}