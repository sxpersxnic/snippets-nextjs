#!/usr/bin/env node
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-console */
import { execSync } from 'node:child_process';
import inquirer from 'inquirer';
import fs from 'fs';

const orms = {
	drizzle: {
		install: 'bun add drizzle-orm pg dotenv',
		dev: 'bun add -D drizzle-kit tsx @types/pg',
		setup: 
		`
		import 'dotenv/config';
		import { drizzle } from 'drizzle-orm/node-postgres';

		export const db = drizzle(process.env.DATABASE_URL!);`,
		configFile: './drizzle.config.ts',
		config: 
		`
		import 'dotenv/config';
		import { defineConfig } from 'drizzle-kit';

		export default defineConfig({
			out: './drizzle',
			schema: './src/_db/schema.ts',
			dialect: 'postgresql',
			dbCredentials: {
				url: process.env.DATABASE_URL!,
			},
		});`,
		schemaFile: './src/_db/schema.ts',
		schema: `
		import { pgTable, varchar } from 'drizzle-orm/pg-core';
		import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
		import { v4 as uuidv4 } from 'uuid';

		export const example = pgTable('example', {
			id: varchar('id', { length: 36 }).primaryKey().notNull().$defaultFn(() => uuidv4()),
			example: varchar('example', { length: 255 }).unique().notNull(),
		});

		export type NewExample = InferInsertModel<typeof example>;
		export type SelectExample = InferSelectModel<typeof example>;
    `,
	},
	prisma: {
		install: 'bun add prisma',
		dev: 'bun add -D @prisma/client',
		setup: `
		import { PrismaClient } from '@prisma/client';
		
		export default const prisma = new PrismaClient();
    `,
		schemaFile: './prisma/schema.prisma',
		schema: `
		generator client {
			provider = 'prisma-client-js'
		}

		datasource db {
			provider = 'postgresql'
			url = env('DATABASE_URL')
		}

		model Example {
			id  Int @id @default(autoincrement())
			example String @db.VarChar(255)
		}
    `,
	},
};

async function setupORM() {
	const { ormChoice } = await inquirer.prompt([
		{
			type: 'list',
			name: 'ormChoice',
			message: 'Select an ORM to set up:',
			choices: Object.keys(orms),
		},
	]);

	const orm = orms[ormChoice];

	try {
		console.log(`Installing ${ormChoice}...`);
		execSync(orm.install, { stdio: 'inherit' });
		execSync(orm.dev, { stdio: 'inherit' });

		console.log(`Setting up ${ormChoice}...`);
		const setupFilePath = './src/_db/index.ts';

		if (orm === orms.drizzle) {
			fs.writeFileSync(orm.configFile, orm.config);
		}
		fs.writeFileSync(setupFilePath, orm.setup);
		fs.writeFileSync(orm.schemaFile, orm.schema);

		console.log(
			`${ormChoice} setup complete. Check ${setupFilePath} for the setup code.`,
		);
	} catch (err) {
		console.error(`Error setting up ${ormChoice}:`, err);
		process.exit(1);
	}
}

setupORM();
