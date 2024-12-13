import { SubmitButton } from 'ui/components/submit-button';
import { FormMessage } from 'ui/forms/form-message';
import { SmtpMessage } from 'ui/auth/smtp-message';
import { signUpAction } from 'lib/actions/auth';
import { Label } from 'ui/components/label';
import { Input } from 'ui/components/input';
import Message from 'lib/types/Message';
import Link from 'next/link';

export default async function Signup(props: {
	searchParams: Promise<Message>;
}) {
	const searchParams = await props.searchParams;
	if ('message' in searchParams) {
		return (
			<div className='flex h-screen w-full flex-1 items-center justify-center gap-2 p-4 sm:max-w-md'>
				<FormMessage message={searchParams} />
			</div>
		);
	}

	return (
		<>
			<form className='mx-auto flex min-w-64 max-w-64 flex-col'>
				<h1 className='text-2xl font-medium'>Sign up</h1>
				<p className='text text-sm text-foreground'>
					Already have an account?{' '}
					<Link
						className='font-medium text-primary underline'
						href='/sign-in'
					>
						Sign in
					</Link>
				</p>
				<div className='mt-8 flex flex-col gap-2 [&>input]:mb-3'>
					<Label htmlFor='email'>Email</Label>
					<Input
						name='email'
						placeholder='you@example.com'
						required
					/>
					<Label htmlFor='password'>Password</Label>
					<Input
						type='password'
						name='password'
						placeholder='Your password'
						minLength={8}
						required
					/>
					<SubmitButton
						formAction={signUpAction}
						pendingText='Signing up...'
					>
						Sign up
					</SubmitButton>
					<FormMessage message={searchParams} />
				</div>
			</form>
			<SmtpMessage />
		</>
	);
}