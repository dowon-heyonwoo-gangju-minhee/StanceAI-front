/** @type {import('next').NextConfig} */
import TerserPlugin from "terser-webpack-plugin";

module.exports = {
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    // 프로덕션 빌드이면서 클라이언트 사이드 번들링일 때만 적용
    if (!dev && !isServer) {
      config.optimization.minimize = true;
      config.optimization.minimizer = config.optimization.minimizer || [];
      config.optimization.minimizer.push(
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true, // 콘솔 로그 제거
            },
            mangle: true, // 변수명 난독화
          },
        })
      );
    }

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
