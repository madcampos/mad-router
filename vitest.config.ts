// oxlint-env node

import { defineConfig } from 'vitest/config';

// oxlint-disable-next-line import/no-default-export
export default defineConfig({
	test: {
		reporters: ['default'],
		coverage: {
			provider: 'v8',
			enabled: true
		}
	}
});
