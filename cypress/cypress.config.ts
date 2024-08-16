import { defineConfig } from "cypress";

enum HostEnvironments {
  LOCAL = 'http://localhost:3000',
  PRODUCTION = 'https://dashboard-frontend-caju.vercel.app'
}

type EnvironmentsProps = 'homolog' | 'local'

const environments = {
  local: {
    baseUrl: HostEnvironments.LOCAL,
  },
  homolog: {
    baseUrl: HostEnvironments.PRODUCTION,
  },
};

export default defineConfig({
  e2e: {
    setupNodeEvents(_on, config) {

      const env: EnvironmentsProps = (config.env.environment || 'homolog');
      const envData = environments[env];

      config.baseUrl = envData.baseUrl;

      config.viewportWidth = 1366;
      config.viewportHeight = 768;

      if (config.env.platform === 'mobile') {
        config.viewportWidth = 414;
        config.viewportHeight = 896;
      }

      return config;
    },
  },
});
