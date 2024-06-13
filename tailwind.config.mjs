/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#030712",
				secondary: "#1f2937",
				borderColor: "#4b5563"
			}
		},
	},
	plugins: [],
}
