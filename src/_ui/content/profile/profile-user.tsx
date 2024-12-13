'use server';

import { getProfileByUserId } from 'lib/data/profile-data';
import { useSession } from 'lib/actions/auth';
import Element from 'lib/types/element';
import Image from 'next/image';

export default async function ProfileUser(): Promise<Element> {
	const user = await useSession();
	const profile = await getProfileByUserId(user.id);

	return (
		<section className='flex flex-row items-center justify-start gap-2'>
			<div>
				<Image
					src={`/pfp/${profile.photo}`}
					alt={`${profile.username}'s profile picture`}
					width={48}
					height={48}
				/>
			</div>
			<div>
				<p>{profile.username}</p>
				<p>{profile.description}</p>
			</div>
		</section>
	);
}
