/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
			fontFamily: {
        'sans': ["Public Sans", "serif",],
      	'serif': ['ui-serif', 'Georgia',],
      	'mono': ["Roboto Mono", "monospace",],
      	'display': ["DM Serif Display", "serif",],
      	'body': ["Montserrat", "sans-serif",],
      },
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

