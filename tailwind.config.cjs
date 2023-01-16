/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      default: '28px'
    },
    colors: {
      'dark-blue-900': 'hsl(218, 23%, 16%)',
      'dark-blue-500': 'hsl(217, 19%, 24%)',
      'dark-blue-200': 'hsl(217, 19%, 38%)',
      'light-cyan': 'hsl(193, 38%, 86%)',
      'neon-green': 'hsl(150, 100%, 66%)'
    },
    boxShadow: {
      default: '0px 0px 40px hsl(150, 100%, 66%)'
    }
  },
  plugins: [],
}
