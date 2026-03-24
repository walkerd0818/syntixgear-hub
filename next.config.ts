import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: false, // Ensure all routes end with a slash
};
module.exports = {
  async rewrites() {
    return [
      {
        source: "/calc-vault/:path*",
        destination: "http://localhost:3001/calc-vault/:path*", // Proxy to Backend
      },
    ];
  },
}
export default nextConfig;
