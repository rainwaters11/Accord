/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom neon/punk palette
        neon: {
          pink: '#FF00FF',
          blue: '#00EEFF',
          green: '#00FF66',
          yellow: '#FFFF00',
          purple: '#9900FF',
        },
        punk: {
          dark: '#121212',
          gray: '#2D2D2D',
          light: '#3D3D3D',
        }
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.neon.blue), 0 0 20px theme(colors.neon.blue)',
        'neon-pink': '0 0 5px theme(colors.neon.pink), 0 0 20px theme(colors.neon.pink)',
        'neon-green': '0 0 5px theme(colors.neon.green), 0 0 20px theme(colors.neon.green)',
      },
    },
  },
  plugins: [],
  // Add custom utility classes
  corePlugins: {
    container: false,
  },
}
