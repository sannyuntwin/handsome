/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    const immutable = [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }];
    return ["/spacekit/:path*", "/globe/:path*", "/img/:path*"].map((source) => ({ source, headers: immutable }));
  },
};

export default nextConfig;