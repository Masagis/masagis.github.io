/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        bg: { DEFAULT: 'var(--bg)', card: 'var(--bg-card)', hover: 'var(--bg-card-hover)' },
        ink: { DEFAULT: 'var(--ink)', secondary: 'var(--ink-secondary)', muted: 'var(--ink-muted)', faint: 'var(--ink-faint)' },
        border: 'var(--border)',
        accent: { DEFAULT: 'var(--accent)', dim: 'var(--accent-dim)' },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
