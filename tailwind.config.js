const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  // darkmode on the based on the system
  darkMode: 'media',
  // tailwind visibilty
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // flowbite
    // 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    flowbite.content(),
  ],
  // theme section
  theme: {
    extend: {
      // color palattes
      colors:{
        "primary-color":"",
        "secondary-color":"",
        "primary-textColor":"",
        "secondary-textColor":"",
      },
      // font familys
      fontFamily:{
        "poppins":["poppins","serif"]
      }
    },
  },
  plugins: [
    // added flowbite plugin
    // require('flowbite/plugin'),
    flowbite.plugin(),
  ],
}

