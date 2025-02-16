/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Estos son los tamaños para dispositivos, puedes ajustarlos según lo que necesites
    deviceSizes: [640, 750, 828], 
    // Estos tamaños son para imágenes fijas (si usas la prop "width" y "height")
    imageSizes: [16, 32, 48, 64, 96],
  },
};

export default nextConfig;
