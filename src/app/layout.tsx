import { Children } from '@/_lib/interfaces/IChildren';
import { Element } from 'lib/types/Element';
import type { Metadata } from 'next';
import 'ui/css/globals.css';

export const metadata: Metadata = {
	title: {
		template: '%s | Snippets',
		default: 'Snippets',
	},
	description: 'Save and share your code snippets!',
};

export default function RootLayout({ children }: Children): Element {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
