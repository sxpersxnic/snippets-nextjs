#!/usr/bin/env node
/* eslint-disable no-console */
import { execSync } from 'node:child_process';

try {
	execSync('npx prettier --write .', { stdio: 'inherit' });
	execSync('npx eslint .', { stdio: 'inherit' });
	execSync('git add .', { stdio: 'inherit' });
	execSync('git commit -m "Automated commit"', { stdio: 'inherit' });
	execSync('git push github main', { stdio: 'inherit' });

	console.log('Deployment script executed successfully');
} catch (err) {
	console.error('Error executing deployment script:', err);
	process.exit(1);
}
