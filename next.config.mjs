import nextI18NextConfig from "./next-i18next.config.mjs";

const nextConfig = {
  i18n: nextI18NextConfig.i18n,
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_PINATA_API_KEY: process.env.NEXT_PUBLIC_PINATA_API_KEY,
    NEXT_PUBLIC_PINATA_SECRET_API_KEY:
      process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY,
    NEXT_PUBLIC_ACOUSTIC_ID_API_KEY:
      process.env.NEXT_PUBLIC_ACOUSTIC_ID_API_KEY,
    NEXT_PUBLIC_CONTRACT_ADDRESS: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    NEXT_PUBLIC_PARTICLE_PROJECT_ID:
      process.env.NEXT_PUBLIC_PARTICLE_PROJECT_ID,
    NEXT_PUBLIC_PARTICLE_CLIENT_KEY:
      process.env.NEXT_PUBLIC_PARTICLE_CLIENT_KEY,
    NEXT_PUBLIC_PARTICLE_APP_ID: process.env.NEXT_PUBLIC_PARTICLE_APP_ID,
  },
  images: {
    domains: ["gateway.pinata.cloud"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
