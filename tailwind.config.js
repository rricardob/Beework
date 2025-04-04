/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'poppins-thin': ["Poppins-Thin", "sans-serif"],
        'poppins-light': ["Poppins-Light", "sans-serif"],
        'poppins-regular': ["Poppins-Regular", "sans-serif"],
        'poppins-bold': ["Poppins-Bold", "sans-serif"],
      },

      colors: {
        primary: {
          light: "#B22D2D",
          dark: "#E63946",
        },
        secondary: {
          DEFAULT: "#F4A261",
        },
        background: {
          light: "#FFFFFF",
          dark: "#1A202C",
        },
        foreground: {
          light: "#1A202C",
          dark: "#E2E8F0",
        },
        muted: {
          light: "#A0AEC0",
          dark: "#718096",
        },
        border: {
          light: "#E2E8F0",
          dark: "#2D3748",
        },
        card: {
          light: "#F7FAFC",
          dark: "#2A2E37",
        },
        accent: {
          light: "#2A9D8F",
          dark: "#48BB78",
        },
        success: {
          light: "#38A169",
          dark: "#68D391",
        },
        error: {
          light: "#E53E3E",
          dark: "#FC8181",
        },
      },

      fontSize: {
        'big-base': ['18px', { lineHeight: '24px' }],
      },


    },
  },
  plugins: [],
}