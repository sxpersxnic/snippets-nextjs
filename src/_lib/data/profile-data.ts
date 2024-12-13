'use server';

import { SelectProfile } from 'lib/types/model';
import { profiles } from 'db/schema';
import { eq } from 'drizzle-orm';
import { db } from '@/_db';

export async function getProfileByUserId(id: string): Promise<SelectProfile> {
	try {
		const data: SelectProfile[] = await db
			.select()
			.from(profiles)
			.where(eq(profiles.userId, id));
		const profile: SelectProfile = data[0];

		return profile;
	} catch (error) {
		console.error('Failed to fetch profile: ', error);
		throw new Error('Failed to fetch profile.');
	}
}

// export async function getSnippetsOfProfile(id: UUID) {}
// export async function getTagsOfProfile(id: UUID) {}
