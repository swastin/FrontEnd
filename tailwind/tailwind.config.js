/*@type {import('tailwindcss').Config} */
module.exports = {
  content: ['./htmlpages/*/*.{html,js}',
    './htmlpages/*/*/*.{html,js}',
    './htmlpages/index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: [
          'Playfair'
        ],
        charm: [
          'Charm'
        ],
        poppins: [
          'Poppins'
        ]
      },
    },
  },
  plugins: [],
}
