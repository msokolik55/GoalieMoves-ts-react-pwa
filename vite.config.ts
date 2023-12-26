import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifestForPlugin: Partial<VitePWAOptions> = {
	registerType: "prompt",
	includeAssets: ["goalie_mask.png"],
	manifest: {
		name: "Train Goalie Moves",
		short_name: "Goalie Moves",
		description:
			"Application for showing different directions and types of movements.",
		icons: [
			{
				src: "/goalie_mask.png",
				sizes: "64x64",
				type: "image/png",
				purpose: "any maskable",
			},
			{
				src: "/goalie_mask.png",
				sizes: "192x192",
				type: "image/png",
				purpose: "any maskable",
			},
			{
				src: "/goalie_mask.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "any maskable",
			},
		],
		theme_color: "#000000",
		background_color: "#ffffff",
		display: "standalone",
		scope: "/",
		start_url: "/",
		orientation: "landscape",
	},
};

export default defineConfig({
	plugins: [react(), VitePWA(manifestForPlugin)],
});
