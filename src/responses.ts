export const STATUS_CODES = {
	/**
	 * This interim response indicates that the client should continue the request or ignore the response if the request is already finished.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100 | MDN Reference}
	 */
	CONTINUE: 100,
	/**
	 * This code is sent in response to an Upgrade request header from the client and indicates the protocol the server is switching to.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101 | MDN Reference}
	 */
	SWITCHING_PROTOCOLS: 101,
	/**
	 * This code was used in WebDAV contexts to indicate that a request has been received by the server, but no status was available at the time of the response.
	 *
	 * **NOTE**: This status code comes from _WebDAV_
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/102 | MDN Reference}
	 */
	PROCESSING: 102,
	/**
	 * This status code is primarily intended to be used with the Link header, letting the user agent start preloading resources while the server prepares a response or preconnect to an origin from which the page will need resources.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/103 | MDN Reference}
	 */
	EARLY_HINTS: 103,
	/**
	 * The request succeeded.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200 | MDN Reference}
	 */
	OKAY: 200,
	/**
	 * The request succeeded, and a new resource was created as a result.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201 | MDN Reference}
	 */
	CREATED: 201,
	/**
	 * The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202 | MDN Reference}
	 */
	ACCEPTED: 202,
	/**
	 * This response code means the returned metadata is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/203 | MDN Reference}
	 */
	NON_AUTHORITATIVE_INFORMATION: 203,
	/**
	 * There is no content to send for this request, but the headers are useful.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204 | MDN Reference}
	 */
	NO_CONTENT: 204,
	/**
	 * Tells the user agent to reset the document which sent this request.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/205 | MDN Reference}
	 */
	RESET_CONTENT: 205,
	/**
	 * This response code is used in response to a range request when the client has requested a part or parts of a resource.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206 | MDN Reference}
	 */
	PARTIAL_CONTENT: 206,
	/**
	 * Conveys information about multiple resources, for situations where multiple status codes might be appropriate.
	 *
	 * **NOTE**: This status code comes from _WebDAV_
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/207 | MDN Reference}
	 */
	MULTI_STATUS: 207,
	/**
	 * Used inside a <dav:propstat> response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.
	 *
	 * **NOTE**: This status code comes from _WebDAV_
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/208 | MDN Reference}
	 */
	ALREADY_REPORTED: 208,
	/**
	 * The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/226 | MDN Reference}
	 */
	IM_USED: 226,
	/**
	 * The request has more than one possible response and the user agent or user should choose one of them.
	 *
	 * **NOTE**: This status code comes from _HTTP Delta Encoding_
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/300 | MDN Reference}
	 */
	MULTIPLE_CHOICES: 300,
	/**
	 * The URL of the requested resource has been changed permanently. The new URL is given in the response.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301 | MDN Reference}
	 */
	MOVED_PERMANENTLY: 301,
	/**
	 * This response code means that the URI of requested resource has been changed temporarily.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302 | MDN Reference}
	 */
	FOUND: 302,
	/**
	 * The server sent this response to direct the client to get the requested resource at another URI with a GET request.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/303 | MDN Reference}
	 */
	SEE_OTHER: 303,
	/**
	 * This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304 | MDN Reference}
	 */
	NOT_MODIFIED: 304,
	/**
	 * @deprecated
	 * Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/305 | MDN Reference}
	 */
	USE_PROXY: 305,
	/**
	 * This response code is no longer used; but is reserved.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/306 | MDN Reference}
	 */
	UNUSED: 306,
	/**
	 * The server sends this response to direct the client to get the requested resource at another URI with the same method that was used in the prior request.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307 | MDN Reference}
	 */
	TEMPORARY_REDIRECT: 307,
	/**
	 * This means that the resource is now permanently located at another URI, specified by the Location response header.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308 | MDN Reference}
	 */
	PERMANENT_REDIRECT: 308,
	/**
	 * The server cannot or will not process the request due to something that is perceived to be a client error.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400 | MDN Reference}
	 */
	BAD_REQUEST: 400,
	/**
	 * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated".
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401 | MDN Reference}
	 */
	UNAUTHORIZED: 401,
	/**
	 * The initial purpose of this code was for digital payment systems, however this status code is rarely used and no standard convention exists.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402 | MDN Reference}
	 */
	PAYMENT_REQUIRED: 402,
	/**
	 * The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403 | MDN Reference}
	 */
	FORBIDDEN: 403,
	/**
	 * The server cannot find the requested resource.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404 | MDN Reference}
	 */
	NOT_FOUND: 404,
	/**
	 * The request method is known by the server but is not supported by the target resource.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405 | MDN Reference}
	 */
	METHOD_NOT_ALLOWED: 405,
	/**
	 * This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content that conforms to the criteria given by the user agent.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406 | MDN Reference}
	 */
	NOT_ACCEPTABLE: 406,
	/**
	 * This is similar to 401 Unauthorized but authentication is needed to be done by a proxy.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407 | MDN Reference}
	 */
	PROXY_AUTHENTICATION_REQUIRED: 407,
	/**
	 * This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408 | MDN Reference}
	 */
	REQUEST_TIMEOUT: 408,
	/**
	 * This response is sent when a request conflicts with the current state of the server.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409 | MDN Reference}
	 */
	CONFLICT: 409,
	/**
	 * This response is sent when the requested content has been permanently deleted from server, with no forwarding address.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410 | MDN Reference}
	 */
	GONE: 410,
	/**
	 * Server rejected the request because the Content-Length header field is not defined and the server requires it.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411 | MDN Reference}
	 */
	LENGHT_REQUIRED: 411,
	/**
	 * In conditional requests, the client has indicated preconditions in its headers which the server does not meet.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412 | MDN Reference}
	 */
	PRECONDITION_FAILED: 412,
	/**
	 * The request body is larger than limits defined by server.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413 | MDN Reference}
	 */
	CONTENT_TOO_LARGE: 413,
	/**
	 * The URI requested by the client is longer than the server is willing to interpret.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414 | MDN Reference}
	 */
	URI_TOO_LONG: 414,
	/**
	 * The media format of the requested data is not supported by the server, so the server is rejecting the request.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415 | MDN Reference}
	 */
	UNSUPPORTED_MEDIA_TYPE: 415,
	/**
	 * The ranges specified by the Range header field in the request cannot be fulfilled.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416 | MDN Reference}
	 */
	RANGE_NOT_SATISFIABLE: 416,
	/**
	 * This response code means the expectation indicated by the Expect request header field cannot be met by the server.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417 | MDN Reference}
	 */
	EXPECTATION_FAILED: 417,
	/**
	 * The server refuses the attempt to brew coffee with a teapot.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418 | MDN Reference}
	 */
	IM_A_TEAPOT: 418,
	/**
	 * The request was directed at a server that is not able to produce a response.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/421 | MDN Reference}
	 */
	MISDIRECTED_REQUEST: 421,
	/**
	 * The request was well-formed but was unable to be followed due to semantic errors.
	 *
	 * **NOTE**: This status code comes from _WebDAV_
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422 | MDN Reference}
	 */
	UNPROCESSABLE_CONTENT: 422,
	/**
	 * The resource that is being accessed is locked.
	 *
	 * **NOTE**: This status code comes from _WebDAV_
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/423 | MDN Reference}
	 */
	LOCKED: 423,
	/**
	 * The request failed due to failure of a previous request.
	 *
	 * **NOTE**: This status code comes from _WebDAV_
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/424 | MDN Reference}
	 */
	FAILED_DEPENDENCY: 424,
	/**
	 * Indicates that the server is unwilling to risk processing a request that might be replayed.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/425 | MDN Reference}
	 */
	TOO_EARLY: 425,
	/**
	 * The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426 | MDN Reference}
	 */
	UPGRADE_REQUIRED: 426,
	/**
	 * The origin server requires the request to be conditional.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428 | MDN Reference}
	 */
	PRECONDITION_REQUIRED: 428,
	/**
	 * The user has sent too many requests in a given amount of time (rate limiting).
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429 | MDN Reference}
	 */
	TOO_MANY_REQUESTS: 429,
	/**
	 * The server is unwilling to process the request because its header fields are too large.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431 | MDN Reference}
	 */
	REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
	/**
	 * The user agent requested a resource that cannot legally be provided, such as a web page censored by a government.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451 | MDN Reference}
	 */
	UNAVAILABLE_FOR_LEGAL_REASONS: 451,
	/**
	 * The server has encountered a situation it does not know how to handle.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500 | MDN Reference}
	 */
	INTERNAL_SERVER_ERROR: 500,
	/**
	 * The request method is not supported by the server and cannot be handled.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501 | MDN Reference}
	 */
	NOT_IMPLEMENTED: 501,
	/**
	 * This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502 | MDN Reference}
	 */
	BAD_GATEWAY: 502,
	/**
	 * The server is not ready to handle the request.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503 | MDN Reference}
	 */
	SERVICE_UNAVAILABLE: 503,
	/**
	 * This error response is given when the server is acting as a gateway and cannot get a response in time.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504 | MDN Reference}
	 */
	GATEWAY_TIMEOUT: 504,
	/**
	 * The HTTP version used in the request is not supported by the server.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505 | MDN Reference}
	 */
	HTTP_VERSION_NOT_SUPPORTED: 505,
	/**
	 * The server has an internal configuration error: during content negotiation, the chosen variant is configured to engage in content negotiation itself, which results in circular references when creating responses.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/506 | MDN Reference}
	 */
	VARIANT_ALSO_NEGOTIATES: 506,
	/**
	 * The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.
	 *
	 * **NOTE**: This status code comes from _WebDAV_
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507 | MDN Reference}
	 */
	INSUFFICIENT_STORAGE: 507,
	/**
	 * The server detected an infinite loop while processing the request.
	 *
	 * **NOTE**: This status code comes from _WebDAV_
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/508 | MDN Reference}
	 */
	LOOP_DETECTED: 508,
	/**
	 * The client request declares an HTTP Extension (RFC 2774) that should be used to process the request, but the extension is not supported.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/510 | MDN Reference}
	 */
	NOT_EXTENDED: 510,
	/**
	 * Indicates that the client needs to authenticate to gain network access.
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/511 | MDN Reference}
	 */
	NETWORK_AUTHENTICATION_REQUIRED: 511
} as const;

export type StatusCodes = typeof STATUS_CODES[keyof typeof STATUS_CODES];

export class ErrorResponse extends Response {
	constructor(message: string, status: StatusCodes = STATUS_CODES.BAD_REQUEST) {
		super(message, {
			status,
			headers: { 'Content-Type': 'text/plain' }
		});
	}
}

export class TextResponse extends Response {
	constructor(message: string, status: StatusCodes = STATUS_CODES.OKAY) {
		super(message, {
			status,
			headers: { 'Content-Type': 'text/plain' }
		});
	}
}

export class JsonResponse extends Response {
	constructor(json: unknown, status: StatusCodes = STATUS_CODES.OKAY) {
		super(JSON.stringify(json), {
			status,
			headers: { 'Content-Type': 'application/json' }
		});
	}
}
