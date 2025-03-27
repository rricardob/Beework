/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {

      fontFamily: {
        'poppins-thin': ["Poppins-Thin", "sans-serif"],
        'poppins-light': ["Poppins-Light", "sans-serif"],
        'poppins-regular': ["Poppins-Regular", "sans-serif"],
        'poppins-bold': ["Poppins-Bold", "sans-serif"],
      },



    },
  },
  plugins: [],
}