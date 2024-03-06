import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'live-tracking',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
