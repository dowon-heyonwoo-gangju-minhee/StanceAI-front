/** @type {import('next').NextConfig} */
import TerserPlugin from "terser-webpack-plugin";

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
};

export default nextConfig;
