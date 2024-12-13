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
			semi: ['warn', 'always'],
			quotes: ['warn', 'single'],
			'tailwindcss/no-custom-classname': 'off',
			'unused-imports/no-unused-imports': 'warn',
			'unused-imports/no-unused-vars': 'warn',
			'react-hooks/rules-of-hooks': 'off',
			'@typescript-eslint/no-unused-vars': 'warn',
			'@typescript-eslint/no-duplicate-enum-values': 'error',
			'@typescript-eslint/ban-ts-comment': 'error',
			'@typescript-eslint/explicit-function-return-type': 'warn',
			'@typescript-eslint/explicit-module-boundary-types': 'warn',
			'@typescript-eslint/no-empty-object-type': 'off',
			'capitalized-comments': ['off', 'always'],
			'no-unused-expressions': 'warn',
			'no-unused-vars': 'warn',

			'no-console': [
				'warn',
				{
					allow: ['warn', 'error'],
				},
			],

			eqeqeq: ['error', 'always'],
			curly: ['error', 'all'],
			'no-var': 'error',
			'prefer-const': 'warn',
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
