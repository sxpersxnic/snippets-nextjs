'use server';

import { createClient } from 'lib/utils/supabase/server';
import { User } from '@supabase/supabase-js';
import { encodedRedirect } from 'lib/utils';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

export async function signUpAction(formData: FormData) {
	const email = formData.get('email')?.toString();
	const password = formData.get('password')?.toString();
	const supabase = await createClient();
	const origin = (await headers()).get('origin');

	if (!email || !password) {
		return encodedRedirect(
			'error',
			'/sign-up',
			'Email and password are required',
		);
	}

	const { error } = await supabase.auth.signUp({
		email,
		password,
		options: {
			emailRedirectTo: `${origin}/api/auth/callback`,
		},
	});

	if (error) {
		console.error(error.code + ' ' + error.message);
		return encodedRedirect('error', '/sign-up', error.message);
	} else {
		return encodedRedirect(
			'success',
			'/sign-up',
			'Thanks for signing up! Please check your email for a verfication link.',
		);
	}
}

export async function signInAction(formData: FormData) {
	const email = formData.get('email') as string;
	const password = formData.get('password') as string;
	const supabase = await createClient();

	const { error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	if (error) {
		return encodedRedirect('error', '/sign-in', error.message);
	}

	return redirect('/protected');
}

export async function forgotPasswordAction(formData: FormData) {
	const email = formData.get('email')?.toString();
	const supabase = await createClient();
	const origin = (await headers()).get('origin');
	const callbackUrl = formData.get('callbackUrl')?.toString();

	if (!email) {
		return encodedRedirect('error', '/forgot-password', 'Email is required');
	}

	const { error } = await supabase.auth.resetPasswordForEmail(email, {
		redirectTo: `${origin}/api/auth/callback?redirect_to=/protected/reset-password`,
	});

	if (error) {
		console.error(error.message);
		return encodedRedirect(
			'error',
			'/forgot-password',
			'Could not reset password',
		);
	}

	if (callbackUrl) {
		return redirect(callbackUrl);
	}

	return encodedRedirect(
		'success',
		'/forgot-password',
		'Check your email for a link to reset your password.',
	);
}

export async function resetPasswordAction(formData: FormData) {
	const supabase = await createClient();

	const password = formData.get('password') as string;
	const confirmPassword = formData.get('confirmPassword') as string;

	if (!password || !confirmPassword) {
		encodedRedirect(
			'error',
			'/protected/reset-password',
			'Password and confirm password are required',
		);
	}

	if (password !== confirmPassword) {
		encodedRedirect(
			'error',
			'/protected/reset-password',
			'Passwords do not match',
		);
	}

	const { error } = await supabase.auth.updateUser({
		password: password,
	});

	if (error) {
		encodedRedirect(
			'error',
			'/protected/reset-password',
			'Password update failed',
		);
	}

	encodedRedirect('success', '/protected/reset-password', 'Password updated');
}

export async function signOutAction() {
	const supabase = await createClient();
	await supabase.auth.signOut();
	return redirect('/sign-in');
}

export async function useSession(): Promise<User> {
	const supabase = await createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) {
		return redirect('/sign-in');
	}

	return user;
}
