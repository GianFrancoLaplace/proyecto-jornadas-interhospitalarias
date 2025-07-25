import type { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
    reactStrictMode: true,

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],

    },


    // 👇 Desactiva Turbopack explícitamente
};

export default nextConfig;
