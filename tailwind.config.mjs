/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'liturgical-red': '#5c2228',
        'liturgical-purple': '#4B0082',
        'liturgical-gold': '#D4AF37',
        'liturgical-deep-gold': '#B4943E',
        'liturgical-green': '#355E3B',
        'liturgical-white': '#FFFFFF',
        'liturgical-black': '#1A1A1A',
        'liturgical-cream': '#F5F5F0',
        'liturgical-burgundy': '#800020',
        'liturgical-purple-dark': '#3B355E'
      },
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'crimson': ['Crimson Text', 'serif'],
      },
      boxShadow: {
        'liturgical': '0 4px 20px -2px rgba(92, 34, 40, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            h1: {
              fontFamily: theme('fontFamily.cinzel'),
              color: theme('colors.liturgical-red'),
              letterSpacing: '0.025em',
            },
            h2: {
              fontFamily: theme('fontFamily.cinzel'),
              color: theme('colors.liturgical-red'),
              letterSpacing: '0.025em',
            },
            h3: {
              fontFamily: theme('fontFamily.cinzel'),
              color: theme('colors.liturgical-red'),
              letterSpacing: '0.025em',
            },
            a: {
              color: theme('colors.liturgical-red'),
              textDecoration: 'none',
              borderBottom: `1px solid ${theme('colors.liturgical-red')}`,
              transition: 'all 0.2s ease',
              '&:hover': {
                color: theme('colors.liturgical-burgundy'),
                borderColor: theme('colors.liturgical-burgundy'),
              },
            },
            blockquote: {
              fontFamily: theme('fontFamily.crimson'),
              color: theme('colors.liturgical-burgundy'),
              borderLeftColor: theme('colors.liturgical-gold'),
              fontStyle: 'normal',
              quotes: 'none',
              padding: '1.5rem 2rem',
              marginTop: '2rem',
              marginBottom: '2rem',
              background: 'linear-gradient(to right, rgba(245, 245, 240, 0.8), transparent)',
              borderRadius: '0.25rem',
              boxShadow: '0 2px 10px -2px rgba(92, 34, 40, 0.1)',
            },
            'blockquote cite': {
              display: 'block',
              marginTop: '0.75rem',
              fontSize: '0.875rem',
              color: theme('colors.liturgical-red'),
              fontFamily: theme('fontFamily.cinzel'),
              letterSpacing: '0.025em',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}