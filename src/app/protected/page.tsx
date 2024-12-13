import { useSession } from 'lib/actions/auth';

export default async function Page() {
	const user = await useSession();
	return (
		<main>
			<div>
				<h1>Welcome {user.email}</h1>
				<strong>ID: {user.id}</strong>
			</div>
		</main>
	);
}
