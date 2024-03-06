import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'live-tracking',
  exposes: {
    './Routes': 'apps/live-tracking/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
