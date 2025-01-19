import type { Config } from "tailwindcss";

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        allura: ['Allura', 'cursive'],
      },
      colors: {
        'saiql-primary': "#264653",
        "saiql-teal": "#2A9D8F",
        "saiql-yellow": "#E9C46A",
        "saiql-orange-primary": "#F4A261",
        "saiql-orange-secondary": '#E76F51',
        "white-400": "rgba(255, 255, 255, 0.80)",
        "platinum": '#DEE2E6',
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/bike-images/cycle-a-number.jpg')",
        'jumbo': "url('/jumbo.png')",
        'card': "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        "wide": "1440px",
        "extra-wide": "1900px",
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config
