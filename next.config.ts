import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: false, // Ensure all routes end with a slash
};
module.exports = {
  async rewrites() {
    return [
      {
        source: "/calc-vault",
        destination: "https://calc-vault.vercel.app/calc-vault", // Proxy to Backend
      },
      {
        source: "/calc-vault/:path*",
        destination: "https://calc-vault.vercel.app/calc-vault/:path*", // Proxy to Backend
      },
    ];
  },
}
export default nextConfig;
