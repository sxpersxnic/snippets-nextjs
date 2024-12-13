'use client';

import { ButtonProps } from '@/_lib/types/properties';
import { useFormStatus } from 'react-dom';
import { Button } from './button';

export function SubmitButton({
	children,
	pendingText = 'Submitting...',
	...props
}: ButtonProps) {
	const { pending } = useFormStatus();

	return (
		<Button
			type='submit'
			aria-disabled={pending}
			{...props}
		>
			{pending ? pendingText : children}
		</Button>
	);
}
