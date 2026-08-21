import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // One less fingerprint header on every response.
  poweredByHeader: false,
  images: {
    // AVIF first, WebP behind it. The profile shot and the project screenshots
    // are the largest paint on most pages, so shrinking them moves LCP — and
    // LCP is a ranking signal.
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
