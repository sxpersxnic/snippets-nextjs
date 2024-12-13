import { UUID } from 'lib/types/UUID';

export default interface TagModel {
	id: UUID;
	name: string;
	color: string;
	createdAt: Date;
	updatedAt: Date;
}
