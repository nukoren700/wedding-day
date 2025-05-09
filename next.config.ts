import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "**",
            },
        ],
    },
    async redirects() {
        return [
            {
                source: "/", // URL ต้นทาง (root path)
                destination: "/home", // URL ปลายทาง
                permanent: true, // ใช้สถานะ 308 สำหรับการ redirect ถาวร
            },
        ];
    },
};

export default nextConfig;
