import type { MetadataRoute } from 'next';

const url = 'https://planets-fact-site-ten-gamma.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/studio/',
    },
    sitemap: `https://${url}/sitemap.xml`,
  };
}
