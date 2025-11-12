// @ts-check
import mdx from "@astrojs/mdx";
import playformInline from "@playform/inline";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// Dedicated Astro config for Firebase Hosting builds
export default defineConfig({
	site: "https://templateconcesionarios.com",
	base: "/",
	integrations: [mdx(), playformInline({ Critters: true })],
	output: "static",
	devToolbar: {
		enabled: false,
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
