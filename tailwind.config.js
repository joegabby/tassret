/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins_regular: ['Poppins_Regular'],
        poppins_bold: ['Poppins_Bold'],
        poppins_italic: ['Poppins_Italic'],
        poppins_semiBold: ['Poppins_SemiBold'],
        poppins_Medium: ['Poppins_Medium'],
        Rabiat_Muhammad: ['Rabiat_Muhammad'],
      }
    },
  },
  plugins: [],
}

