import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'notifications',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
