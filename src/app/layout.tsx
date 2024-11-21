import { Children } from 'lib/interfaces';
import type { Metadata } from 'next';
import { Element } from 'lib/types';
import 'ui/css/globals.css';

export const metadata: Metadata = {
	title: {
		template: '%s | Next-Boilerplate',
		default: 'Next-Boilerplate',
	},
	description: 'Next boilerplate template',
};

export default function RootLayout({ children }: Children): Element {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
