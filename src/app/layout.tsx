import { IChildren } from 'lib/interfaces/Children';
import { Element } from 'lib/types/Element';
import type { Metadata } from 'next';
import 'ui/css/globals.css';

export const metadata: Metadata = {
	title: {
		template: '%s | Next-Boilerplate',
		default: 'Next-Boilerplate',
	},
	description: 'Next boilerplate template',
};

export default function RootLayout({ children }: IChildren): Element {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
