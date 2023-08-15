import { vitePreprocess } from "@sveltejs/kit/vite";
import adapter from "@ampt/sveltekit";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  files: {
    assets: "assets",
  },
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
  },
};

export default config;
