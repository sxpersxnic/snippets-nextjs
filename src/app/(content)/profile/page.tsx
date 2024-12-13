import ProfileUserSkeleton from 'ui/skeletons/ProfileSkeleton';
import ProfileUser from 'ui/content/profile/profile-user';
import Element from 'lib/types/element';
import { Suspense } from 'react';

export default function Page(): Element {
	return (
		<main>
			<div>
				<h1>--Breadcrumbs--</h1>
			</div>
			<div>
				<Suspense fallback={<ProfileUserSkeleton />}>
					<ProfileUser />
				</Suspense>
			</div>
		</main>
	);
}
