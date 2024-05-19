/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1400px' },
    },
    fontFamily: {
      helvetica: ['"helvetica"', 'system-ui', 'sans-serif'],
    },
    fontWeight: { light: 300, normal: 400, bold: 600 },
    extend: {
      colors: {
        background: 'var(--background)',

        primary: { DEFAULT: 'var(--primary)' },
        secondary: { DEFAULT: 'var(--secondary)' },

        card: { DEFAULT: 'var(--card)' },
        popover: { DEFAULT: 'var(--popover)' },

        muted: { DEFAULT: 'var(--muted)' },
        success: { DEFAULT: 'var(--success)' },
        danger: { DEFAULT: 'var(--danger)' },
      },

      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
