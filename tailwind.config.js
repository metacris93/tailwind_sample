module.exports = {
  content: [
	  './public/**/*.html',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
	  extend: {
		  backgroundImage: {
			  'sanFrancisco': "url('../img/sanFrancisco.jpg')",
			  'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
			  'yosemite': "url('../img/yosemite.jpg')",
			  'LA': "url('../img/LA.jpg')",
			  'seattle': "url('../img/seattle.jpg')",
			  'new_york': "url('../img/new_york.jpg')",
			  'norway': "url('../img/norway.jpg')",
			  'sydney': "url('../img/sydney.jpg')",
			  'miami': "url('../img/miami.jpg')",
			  'switzerland': "url('../img/switzerland.jpg')",
			  'bali': "url('../img/bali.jpg')",
			  'norway': "url('../img/norway.jpg')",
			  'chicago': "url('../img/chicago.jpg')",
			  'europe': "url('../img/europe.jpg')",
			  'iceland': "url('../img/iceland.jpg')",
			},
			backgroundColor: theme =>({
				...theme('colors'),
				'primary': '#CC2D4A',
				'secondary': '#8FA206',
				'tertiary': '#61AEC9',
			}),
			textColor:{
				'primary': '#CC2D4A',
				'secondary': '#8FA206',
				'tertiary': '#61AEC9',
			},
			fontFamily: {
				Montserrat: ["Montserrat", "sans-serif"],
			 },
			
		},
	},
	variants: {
    /* hay variantes que tailwind no las tiene activada por default.
    Agregamos la variante para que de manera responsive reaccione a mover el width en un hover o focus*/
		width: ["responsive", "hover", "focus"],
		extend: {
	 },
  },
  plugins: [],
}
