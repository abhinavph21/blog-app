/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "images.pexels.com"
            }
        ]
    },
    env: {
        MONGO_URI: "mongodb+srv://apabhinav16:abhinavph21@cluster0.tv6z7pd.mongodb.net/blog"
    }
}

module.exports = nextConfig
