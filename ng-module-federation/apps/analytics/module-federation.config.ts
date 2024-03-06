import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'analytics',
  exposes: {
    './Routes': 'apps/analytics/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
