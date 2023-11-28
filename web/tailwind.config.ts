import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-spaceGrotesk)',
      },
      colors: {
        barber: {
          900: '#12131b',
          400: '#1b1c29',
          100: '#c6c6c6',
        },
        button: {
          cta: '#fba931',
          default: '#FFF',
          gray: '#DFDFDF',
          danger: '#FF4040',
        },
        orange: {
          900: '#fba931',
        },
      },
    },
  },
  plugins: [],
}
export default config
