import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: {
      entry: "server",
    },
  },

  vite: {
    server: {
      allowedHosts: ["nptel.servebeer.com","image-to-pdf-bliss.onrender.com"],
    },
  },
});
