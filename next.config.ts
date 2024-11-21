import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [], // Укажите домены для внешних изображений, если они используются
    unoptimized: true, // Для поддержки локальных изображений
  },
};

export default nextConfig;
