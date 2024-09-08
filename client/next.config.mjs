// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['feature-dashboard.s3.ap-south-1.amazonaws.com'],
  },
    async rewrites() {
      return [
        {
          source: '/:path*',
          destination: 'http://localhost:3001/api/:path*',
        },
      ];
    },
  };
  
  export default nextConfig;