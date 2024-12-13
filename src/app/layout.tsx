import AuthButton from '@/_ui/navigation/header-auth';
import { Children } from '@/_lib/interfaces/children';
import Element from '@/_lib/types/element';
import type { Metadata } from 'next';
import Link from 'next/link';
import 'ui/css/globals.css';

const defaultUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: 'http://localhost:3000';

export const metadata: Metadata = {
	metadataBase: new URL(defaultUrl),
	title: {
		template: '%s | Snippets',
		default: 'Snippets',
	},
	description: 'Save and share your code snippets!',
};

export default function RootLayout({ children }: Children): Element {
	return (
		<html lang='en'>
			<body>
				<div className='flex flex-row items-center justify-between'>
					<Link href='/'>Home</Link>
					<AuthButton />
				</div>
				{children}
			</body>
		</html>
	);
}
