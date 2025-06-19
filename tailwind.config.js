/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f8f9fa', // 60% - light neutral background
        },
        secondary: {
          DEFAULT: '#495057', // 30% - darker shade for content
        },
        accent: {
          DEFAULT: '#228be6', // 10% - vibrant accent for CTAs
        },
      },
      backgroundColor: {
        'background': 'hsl(var(--background))',
        'foreground': 'hsl(var(--foreground))',
      },
      textColor: {
        'background': 'hsl(var(--background))',
        'foreground': 'hsl(var(--foreground))',
      }
    },
  },
  plugins: [],
}
