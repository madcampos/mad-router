// oxlint-env node
/// <reference types="@types/node" />

import type { IncomingMessage, ServerResponse } from 'node:http';
import { Readable } from 'node:stream';
import type { ReadableStream as NodeReadableStream } from 'node:stream/web';
import type { Router } from './index.ts';

interface NodeAdapterOptions {
	host: string;
	isHttps?: boolean;
}

export function nodeAdapter(router: Router, { host, isHttps }: NodeAdapterOptions) {
	return async (req: IncomingMessage, res: ServerResponse) => {
		const protocol = isHttps ? 'https' : 'http';
		const url = new URL(req.url ?? '/', `${protocol}://${host}`);

		const headers = new Headers();
		Object.entries(req.headersDistinct).forEach(([header, values]) => {
			values?.forEach((value) => {
				headers.append(header, value);
			});
		});

		const requestInit: RequestInit = {
			// INFO: Defaults to `POST`
			method: req.method?.toUpperCase() ?? 'POST',
			headers: headers,
			// oxlint-disable-next-line typescript/consistent-type-assertions typescript/no-unsafe-type-assertion
			body: (req.method === 'GET' || req.method === 'HEAD') ? undefined : Readable.toWeb(req) as ReadableStream
		};

		const request = new Request(url, requestInit);
		const response = await router.fetch(request, process.env);

		res.statusCode = response.status;
		response.headers.forEach((value, key) => {
			res.setHeader(key, value);
		});

		if (response.body) {
			// oxlint-disable-next-line typescript/consistent-type-assertions typescript/no-unsafe-type-assertion
			Readable.fromWeb(response.body as NodeReadableStream).pipe(res);
		} else {
			res.end();
		}
	};
}
