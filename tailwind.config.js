/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {},
    screens: {
      'minidesktop' : {'max': '1200px'},
      'anotherminidesktop' : {'max': '1100px'},
      'tab' : {'max': '1024px'},
      'responsivestart' : {'max': '1000px'},
      'mobile' : {'max': '800px'},
    },
    colors: {
      'bluebg' : '#709ec3',
      'blackbg' : '#333333',
      'whitebg' : '#ffffff',
    },
    fontFamily: {
      'Playfair' : ['Playfair Display', 'serif'],
      'Questrial' : ['Questrial', 'serif'],
      'Raleway' : ['Raleway', 'serif'],
      'SamsunBuang' : ['Samsung Sharp Sans Regular', 'sans'],
    },
    fontSize: {
      'normaltext' : '19px',
      'normaltext' : '20px',
      'headingtexts' : '50px',
      'headingtext2' : '28px',
    },
  },
  plugins: [],
}
