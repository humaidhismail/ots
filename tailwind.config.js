const flowbite = require("flowbite-react/tailwind");
module.exports = {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin(),],

  theme: {
    extend: {
      fontFamily: {
        'playfair-display-black': ['"Playfair Display Black"', 'serif'],
        'playfair-display-medium': ['"Playfair Display Medium"', 'serif'],
        'playfair-display-regular': ['"Playfair Display Regular"', 'serif'],
      },
      backgroundImage: {
        'vision': "url('images/turbinemobile.png')",
        'whyus' : "url('images/plane.jpg')"
      }
      
    },
  },
}

