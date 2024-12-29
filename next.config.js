/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // 移除 output: 'export' 以支持 API 路由
    // 如果部署在子目录下，需要设置 basePath
    // basePath: '/your-base-path',
  }
  
  module.exports = nextConfig