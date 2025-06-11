import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828],
    imageSizes: [16, 32, 48, 64, 96],
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
