import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { pgTable, varchar } from 'drizzle-orm/pg-core';
import { v4 as uuidv4 } from 'uuid';

export const example = pgTable('example', {
	id: varchar('id', { length: 36 })
		.primaryKey()
		.notNull()
		.$defaultFn(() => uuidv4()),
	example: varchar('example', { length: 255 }).unique().notNull(),
});

export type NewExample = InferInsertModel<typeof example>;
export type SelectExample = InferSelectModel<typeof example>;
