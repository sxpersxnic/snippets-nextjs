import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest): Promise<NextResponse> {
	const cookieStore = await cookies();
	const { cookiesToSet } = await req.json();

	cookiesToSet.forEach(
		({
			name,
			value,
			options,
		}: {
			name: string;
			value: string;
			options: ResponseCookie;
		}) => {
			cookieStore.set(name, value, options);
		},
	);

	return NextResponse.json({ message: 'success' });
}
