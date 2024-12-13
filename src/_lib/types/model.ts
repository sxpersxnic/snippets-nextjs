import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { profiles } from 'db/schema';

export type NewProfile = InferInsertModel<typeof profiles>;
export type SelectProfile = InferSelectModel<typeof profiles>;
