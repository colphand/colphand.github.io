module.exports = {
  theme: {
    fontFamily: {
      'sans': ['Space Mono','ui-sans-serif', 'system-ui'],
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.65rem',
      '4xl': '1.875rem',
      '5xl': '2.25rem',
      '6xl': '3rem',
      '7xl': '4rem',
      '8xl': '5rem',
    }
  },
  darkMode: 'class',
  content: ['./src/**/*.md', './src/**/*.html', './src/_includes/**/*.liquid'],
  plugins: [
    require('@tailwindcss/typography')
  ],
  
}