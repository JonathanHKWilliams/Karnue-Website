/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Disable strict mode to prevent double-rendering which can cause extension conflicts
  images: {
    unoptimized: true,
  },
  // Add Content Security Policy to prevent extension interference
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com; object-src 'none';",
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
