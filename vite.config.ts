import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // This automatically handles the Vercel preset when deployed, 
  // but keeps the default Cloudflare setup for Lovable's preview.
  nitro: process.env.VERCEL ? true : false,
  tanstackStart: {
    server: { 
      entry: "server",
    },
  },
});
