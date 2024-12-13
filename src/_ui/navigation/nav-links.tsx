'use client';

import { UserIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import Element from '@/_lib/types/element';
import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';

const links = [{ name: 'Profile', href: '/profile', icon: UserIcon }];

export default function NavLinks(): Element {
	const pathname = usePathname();

	return (
		<>
			{links.map((link) => {
				const LinkIcon = link.icon;
				return (
					<Link
						key={link.name}
						href={link.href}
						className={clsx(
							'md:transition-color flex h-[48px] grow items-center justify-center gap-2 rounded-md border-2 border-[--foreground] p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3',
							{
								'bg-[--foreground] text-[--background]': pathname === link.href,
								'md:hover:bg-[--hoverbg] md:hover:text-[--hovertext]':
									pathname !== link.href,
							},
						)}
					>
						<LinkIcon className='w-6' />
						<p className='hidden md:block'>{link.name}</p>
					</Link>
				);
			})}
		</>
	);
}
