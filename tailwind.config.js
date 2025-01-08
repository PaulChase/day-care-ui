/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{html,js}", "./index.html"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "#7047EB",
				btn_focused: "#32158B",
				btn_inactive: "#DDD3FA",
			},
			fontFamily: {
				courgette: ["Courgette", "cursive"],
				quicksand: ["Quicksand", "sans-serif"],
			},
		},
	},
	plugins: [],
};
