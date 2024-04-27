/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // extend: {
    //   screens: {
    //     '2xl': '1536px',
    //      'xl':'1080px',
    //      'lg':'780px',
    //      'md':'440px',
    //      'sm':'360px'
    //   },
    // },
    
  },
  theme: {
    // screens: {
    //   'sm': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'md': '768px',
    //   // => @media (min-width: 1024px) { ... }

    //   'lg': '1024px',
    //   // => @media (min-width: 1280px) { ... }
    //   'xl':'1280px',
    //   '2xl':'1536px'
    // },
  },
  plugins: [],
}


