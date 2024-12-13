/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				accent: 'var(--accent)',
				hoverfg: 'var(--hoverfg)',
				hoverbg: 'var(--hoverbg)',
			},
		},
		keyframes: {
			shimmer: {
				'100%': {
					transform: 'translateX(100%)',
				},
			},
		},
	},
	plugins: [require('tailwind-merge'), require('@tailwindcss/forms')],
} satisfies Config;
