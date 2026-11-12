/** @type {import('next').NextConfig} */
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://i.ytimg.com",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-src https://www.youtube-nocookie.com",
  "media-src 'self' blob: https://www.youtube-nocookie.com",
  "worker-src 'self' blob:",
  "upgrade-insecure-requests"
].join("; ");

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    const headers = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "DENY" },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()"
      }
    ];

    if (process.env.NODE_ENV === "production") {
      headers.push(
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload"
        },
        { key: "Content-Security-Policy", value: contentSecurityPolicy }
      );
    }

    return [{ source: "/:path*", headers }];
  }
};

export default nextConfig;
