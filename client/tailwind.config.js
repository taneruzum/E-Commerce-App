

export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // Daha küçük ekranlar (mobil cihazlar) için
      'xs': '460px',

      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',

      // Ekstra büyük ekranlar için
      '3xl': '1920px',

    },

    extend: {
      backgroundImage: {
        'login-bg': "url('/orangebg.png')",
      },
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif'],
        'openSans': ['Open Sans', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'gilmer': ['Gilmer', 'sans-serif'],
      },
      colors: {
        'saydam': '#00000010',
        'saydam2': '#00000020',
        'golden1': '#F8BD00',
        'golden2': '#F2A93E',
        'customBlack':'#252525',
        'color1': '#FF7F00',
        'color2': '#231F20',
        'color3': '#414143',
        'color4': '#818286'
      }
    },

  },
  plugins: [],
}