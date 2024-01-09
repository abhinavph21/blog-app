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
        MONGO_URI: "mongodb+srv://apabhinav16:abhinavph21@cluster0.tv6z7pd.mongodb.net/blog",
        GITHUB_ID: "cb66c67c00e643db7672",
        GITHUB_SECRET: "f5e1c6d15356417de714131dc2fdc458550273fb",
        AUTH_SECRET: "blogsecret",
        AUTH_URL: "http://localhost:3000/api/auth"
    }
}

module.exports = nextConfig
