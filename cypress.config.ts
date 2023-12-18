import { devServer } from "@cypress/vite-dev-server";
import { defineConfig } from "cypress";

import viteConfig from "./vite.config";

export default defineConfig({
  video: false,
  e2e: {
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
    setupNodeEvents(on, config) {
      on("dev-server:start", (options) => {
        return devServer({
          ...options,
          ...viteConfig,
        });
      });

      return config;
    },
    baseUrl: "https://localhost:3000",
  },
});
