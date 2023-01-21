/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./src/*.html",
	"./src/*.js",
	],
  theme: {
    extend: {},
  },
  plugins: [
	    require('@tailwindcss/typography'),
	    require('@tailwindcss/forms'),
	    require('prettier-plugin-tailwindcss'),
	],
}
