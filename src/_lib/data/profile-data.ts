'use server';

import { SelectProfile } from 'lib/types/model';
import { profiles } from 'db/schema';
import { eq } from 'drizzle-orm';
import { createClient } from '../utils/supabase/server';

const db = await createClient();

export async function getProfileByUserId(id: string) {
	try {
		const { data, error, status } = await db.from('profiles').select().eq('user_id', id).single();

		if (error && status !== 406) {
			throw error;
		}

		return data;
	} catch (error) {
		console.error('Failed to fetch profile: ', error);
		throw new Error('Failed to fetch profile.');
	}
}

// export async function getSnippetsOfProfile(id: UUID) {}
// export async function getTagsOfProfile(id: UUID) {}
