/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        // Optional: Use a wildcard if subdomains can change
        // hostname: '*.googleusercontent.com',
        // Optional: Match all paths
        pathname: '**',
      },
    ],
  },
};


export default nextConfig;
