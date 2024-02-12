/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com', 'www.zlotafirma.pl'],
  },
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './my-loader.ts',
  },
};

export default nextConfig;
