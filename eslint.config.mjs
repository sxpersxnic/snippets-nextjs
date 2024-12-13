/* eslint-disable import/no-anonymous-default-export */
import unusedImports from 'eslint-plugin-unused-imports';
import tailwindcss from 'eslint-plugin-tailwindcss';
import tsParser from '@typescript-eslint/parser';
import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import js from '@eslint/js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	{
		ignores: [
			'**/node_modules/',
			'**/.next/',
			'**/assets/',
			'**/public/',
			'**/*.sh',
			'**/jest.config.ts',
		],
	},
	...compat.extends(
		'next/core-web-vitals',
		'next/typescript',
		'prettier',
		'plugin:tailwindcss/recommended',
	),
	{
		plugins: {
			tailwindcss,
			'unused-imports': unusedImports,
		},

		languageOptions: {
			parser: tsParser,
			ecmaVersion: 2024,
			sourceType: 'module',

			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},

		settings: {
			tailwindcss: {
				callees: ['cn'],
				config: './tailwind.config.ts',
			},

			next: {
				rootDir: ['./src/'],
			},
		},

		rules: {
			semi: ['error', 'always'],
			quotes: ['error', 'single'],
			'tailwindcss/no-custom-classname': 'off',
			'unused-imports/no-unused-imports': 'error',
			'unused-imports/no-unused-vars': 'error',
			'@typescript-eslint/no-unused-vars': 'error',
			'@typescript-eslint/no-duplicate-enum-values': 'error',
			'@typescript-eslint/ban-ts-comment': 'error',
			'@typescript-eslint/explicit-function-return-type': 'error',
			'@typescript-eslint/explicit-module-boundary-types': 'error',
			'capitalized-comments': ['off', 'always'],
			'no-unused-expressions': 'error',
			'no-unused-vars': 'error',

			'no-console': [
				'error',
				{
					allow: ['warn', 'error'],
				},
			],

			eqeqeq: ['error', 'always'],
			curly: ['error', 'all'],
			'no-var': 'error',
			'prefer-const': 'error',
			'no-debugger': 'off',
			'no-alert': 'error',
			'no-eval': 'error',
			'no-implied-eval': 'error',
			'no-iterator': 'error',
			'no-proto': 'error',
			'no-with': 'error',
			'no-shadow': 'error',

			'no-use-before-define': [
				'error',
				{
					functions: false,
					classes: true,
					variables: true,
				},
			],
		},
	},
];
