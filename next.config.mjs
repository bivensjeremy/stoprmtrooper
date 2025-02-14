/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.google.com'
            },
            {
                protocol: 'https',
                hostname: 'nextui.org'
            }
        ]
    }
};

export default nextConfig;
