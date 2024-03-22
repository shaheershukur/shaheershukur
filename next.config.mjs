/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const githubDomain = 'https://shaheershukur.github.io/shaheershukur';

const nextConfig = {
  output: 'export',
  cleanDistDir: true,
  assetPrefix: isProd ? githubDomain : undefined,
  basePath: '',
};

export default nextConfig;
