// @ts-check
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";
import playformInline from "@playform/inline";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://templateconcesionarios.com",
	base: "/",
	integrations: [mdx(), playformInline({ Critters: true })],
	output: "static",
	devToolbar: {
		enabled: false,
	},
	adapter: netlify(),
	vite: {
		plugins: [tailwindcss()],
	},
});
