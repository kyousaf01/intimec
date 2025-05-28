import type { NextConfig } from "next";
import withTM from "next-transpile-modules";

// Pass the packages you want to transpile
const withTranspileModules = withTM(["antd", "rc-util"]);

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // add other config options here if needed
};

export default withTranspileModules(nextConfig);
