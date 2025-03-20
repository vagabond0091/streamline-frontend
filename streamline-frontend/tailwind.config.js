/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'secondaryBtn':"#d3eddb",
        'textPrimary':"#84c793",
        'primary':"#00932c"
      },
    },
  
  },
  plugins: [],
}

