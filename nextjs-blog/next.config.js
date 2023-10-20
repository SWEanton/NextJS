const withTM = require('next-transpile-modules')(['web3-eth-abi']);

module.exports = withTM({
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        module: false,
      };
    }
    return config;
  },
});