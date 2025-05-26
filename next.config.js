/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // distDir: 'out',
  images: {
    unoptimized: true
  },
  // CSS optimizasyonu
  optimizeFonts: true,
  swcMinify: true,
  // Sıkıştırma ve küçültme
  compress: true,
  // Önbellekleme stratejisi
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 60 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 5,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googleapis.com https://*.gstatic.com https://*.google.com https://maps.googleapis.com https://*.googletagmanager.com https://tagmanager.google.com https://www.googletagmanager.com blob:;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.gstatic.com https://tagmanager.google.com https://www.googletagmanager.com;
              img-src 'self' data: https://*.googleapis.com https://*.gstatic.com https://*.google.com https://maps.googleapis.com https://maps.gstatic.com https://www.googletagmanager.com https://www.google-analytics.com;
              font-src 'self' data: https://fonts.gstatic.com;
              frame-src 'self' https://www.google.com https://*.google.com https://maps.googleapis.com https://www.googletagmanager.com https://www.google.com/maps/;
              connect-src 'self' https://*.googleapis.com https://*.gstatic.com https://*.google.com https://*.googletagmanager.com https://www.google-analytics.com;
              worker-src 'self' blob:;
              child-src 'self' blob: https://www.google.com https://*.google.com https://maps.googleapis.com https://www.google.com/maps/;
              frame-ancestors 'self';
              form-action 'self';
              base-uri 'self';
            `.replace(/\s+/g, ' ').trim()
          }
        ]
      }
    ]
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@mui/icons-material', '@mui/material']
  }
};

module.exports = nextConfig; 
