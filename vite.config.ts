// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// This project targets Vercel, so Cloudflare output is disabled and Nitro handles the server build.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

export default defineConfig({
	cloudflare: false,
	plugins: [nitro({ preset: "vercel" })],
	vite: {
		server: {
			allowedHosts: ["free-faithful-raccoon.ngrok-free.app"],
		},
	},
});
