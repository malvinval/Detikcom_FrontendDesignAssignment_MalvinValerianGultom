/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,}"],
  theme: {
    extend: {
      colors: {
        "detik-blue": "#007CBD"
      },
      fontFamily: {
        "poppins": ['Poppins', 'sans-serif'],
        "montserrat": ['Montserrat', 'sans-serif'],
        "manrope": ['Manrope', 'sans-serif']
      },
      fontWeight: {
        "bold-400": "400",
        "bold-500": "500",
        "bold-900": "900",
        "bold-600": "600",
        "bold-700": "700"
      },
      borderRadius: {
        "half": "50px"
      },
      backgroundImage: {
        "detik-hero-image": "url('./img/hero-image.png')"
      },
      margin: {
        "detik-hero-6rem": "2rem"
      }
    },
  },
  plugins: [],
}

