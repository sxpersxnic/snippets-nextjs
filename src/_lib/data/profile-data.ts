'use server';

import { notFound } from 'next/navigation';
import { createClient } from '../utils/supabase/server';
import Profile from 'lib/types/model/profile';

const db = await createClient();

export async function getProfileByUserId(id: string): Promise<Profile> {
	try {
		const { data, error, status } = await db
			.from('profiles')
			.select('id, user_id, username, description, photo')
			.eq('user_id', id)
			.single();

		if (error && status !== 406) {
			throw error;
		}

		const profile: Profile = {
			id: data?.id,
			user_id: data?.user_id,
			username: data?.username,
			description: data?.description,
			photo: data?.photo,
		};
		
		return profile;

	} catch (error) {
		console.error('Failed to fetch profile: ', error);
		throw new Error('Failed to fetch profile.');
	}
}

// export async function getSnippetsOfProfile(id: UUID) {}
// export async function getTagsOfProfile(id: UUID) {}
