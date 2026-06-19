import { ErrorResponse, STATUS_CODES } from './responses.ts';

export type RequestHandler = <Env extends Record<string, string | undefined> = Record<string, string | undefined>>(request: Request, env: Env) => Promise<Response> | Response;

export type HTTPMethod = 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT';

interface RouterOptions {
	routes?: {
		method: HTTPMethod,
		route: string,
		handler: RequestHandler
	}[];
	fallbackRoute?: RequestHandler;
}

export class Router {
	#routes: Record<HTTPMethod, { pattern: URLPattern, handler: RequestHandler }[]> = {
		GET: [],
		HEAD: [],
		POST: [],
		PUT: [],
		DELETE: [],
		OPTIONS: [],
		PATCH: []
	};
	#fallbackRoute: RequestHandler;

	constructor({ routes, fallbackRoute }: RouterOptions = {}) {
		this.#fallbackRoute = fallbackRoute ?? (() => new ErrorResponse('Not Found', STATUS_CODES.NOT_FOUND));

		routes?.forEach(({ method, route, handler }) => {
			const methodRoutes = this.#routes[method];

			methodRoutes.push({
				pattern: new URLPattern({ pathname: route }),
				handler
			});
		});
	}

	get(route: string, handler: RequestHandler) {
		this.#routes.GET.push({
			pattern: new URLPattern({ pathname: route }),
			handler
		});
	}

	head(route: string, handler: RequestHandler) {
		this.#routes.HEAD.push({
			pattern: new URLPattern({ pathname: route }),
			handler
		});
	}

	post(route: string, handler: RequestHandler) {
		this.#routes.POST.push({
			pattern: new URLPattern({ pathname: route }),
			handler
		});
	}

	put(route: string, handler: RequestHandler) {
		this.#routes.PUT.push({
			pattern: new URLPattern({ pathname: route }),
			handler
		});
	}

	delete(route: string, handler: RequestHandler) {
		this.#routes.DELETE.push({
			pattern: new URLPattern({ pathname: route }),
			handler
		});
	}

	options(route: string, handler: RequestHandler) {
		this.#routes.OPTIONS.push({
			pattern: new URLPattern({ pathname: route }),
			handler
		});
	}

	patch(route: string, handler: RequestHandler) {
		this.#routes.PATCH.push({
			pattern: new URLPattern({ pathname: route }),
			handler
		});
	}

	async fetch<Env extends Record<string, string | undefined> = Record<string, string | undefined>>(request: Request, env: Env) {
		try {
			const resolvedUrl = new URL(request.url);
			// oxlint-disable-next-line typescript/consistent-type-assertions typescript/no-unsafe-type-assertion
			const methodRoutes = this.#routes[request.method.toUpperCase() as HTTPMethod];
			const { pattern, handler } = methodRoutes.find(({ pattern: curPattern }) => curPattern.test(resolvedUrl.href)) ?? {};

			if (!pattern || !handler) {
				return await this.#fallbackRoute(request, env);
			}

			return await handler(request, env);
		} catch (err) {
			if (err instanceof ErrorResponse) {
				return err;
			}

			if (err instanceof Error) {
				return new ErrorResponse(err.message, STATUS_CODES.INTERNAL_SERVER_ERROR);
			}

			return new ErrorResponse('Server Error', STATUS_CODES.INTERNAL_SERVER_ERROR);
		}
	}
}
