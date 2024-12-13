import { defineConfig } from 'drizzle-kit';
import 'dotenv/config';

export default defineConfig({
	out: './drizzle',
	schema: './src/_db/schema.ts',
	dialect: 'postgresql',
	dbCredentials: {
		url: process.env.DATABASE_URL!,
	},
});
