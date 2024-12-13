import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { DEFAULT_PFP } from '@/_lib/defaults';
import { v4 as uuidv4 } from 'uuid';

export const profiles = pgTable('profiles', {
	id: uuid('id')
		.primaryKey()
		.notNull()
		.unique()
		.$defaultFn(() => uuidv4()),
	userId: uuid('user_id').notNull().unique(),
	username: text('username').notNull().unique(),
	description: text('description'),
	photo: text('photo').notNull().default(DEFAULT_PFP),
	createdAt: timestamp('created_at').defaultNow(),
	updatedAt: timestamp('updated_at').defaultNow(),
});
