export const HTTP_RESPONSE_CODES = [
	100: {
		code: 100,
		title: 'CONTINUE',
		message: 'Continue'
	},
	101: {
		code: 101,
		title: 'SWITCHING_PROTOCOLS',
		message: 'Switching Protocols'
	},
	102: {
		code: 102,
		title: 'PROCESSING',
		message: 'Processing'
	},
	200: {
		code: 200,
		title: 'OK',
		message: 'OK'
	},
	201: {
		code: 201,
		title: 'CREATED',
		message: 'Created'
	},
	202: {
		code: 202,
		title: 'ACCEPTED',
		message: 'Accepted'
	},
	203: {
		code: 203,
		title: 'NON_AUTHORITATIVE_INFORMATION',
		message: 'Non Authoritative Information'
	},
	204: {
		code: 204,
		title: 'NO_CONTENT',
		message: 'No Content'
	},
	205: {
		code: 205,
		title: 'RESET_CONTENT',
		message: 'Reset Content'
	},
	206: {
		code: 206,
		title: 'PARTIAL_CONTENT',
		message: 'Partial Content'
	},
	207: {
		code: 207,
		title: 'MULTI_STATUS',
		message: 'Multi-Status'
	},
	300: {
		code: 300,
		title: 'MULTIPLE_CHOICES',
		message: 'Multiple Choices'
	},
	301: {
		code: 301,
		title: 'MOVED_PERMANENTLY',
		message: 'Moved Permanently'
	},
	302: {
		code: 302,
		title: 'MOVED_TEMPORARILY',
		message: 'Moved Temporarily'
	},
	303: {
		code: 303,
		title: 'SEE_OTHER',
		message: 'See Other'
	},
	304: {
		code: 304,
		title: 'NOT_MODIFIED',
		message: 'Not Modified'
	},
	305: {
		code: 305,
		title: 'USE_PROXY',
		message: 'Use Proxy'
	},
	307: {
		code: 307,
		title: 'TEMPORARY_REDIRECT',
		message: 'Temporary Redirect'
	},
	308: {
		code: 308,
		title: 'PERMANENT_REDIRECT',
		message: 'Permanent Redirect'
	},
	400: {
		code: 400,
		title: 'BAD_REQUEST',
		message: 'Bad Request'
	},
	401: {
		code: 401,
		title: 'UNAUTHORIZED',
		message: 'Unauthorized'
	},
	402: {
		code: 402,
		title: 'PAYMENT_REQUIRED',
		message: 'Payment Required'
	},
	403: {
		code: 403,
		title: 'FORBIDDEN',
		message: 'Forbidden'
	},
	404: {
		code: 404,
		title: 'NOT_FOUND',
		message: 'Not Found'
	},
	405: {
		code: 405,
		title: 'METHOD_NOT_ALLOWED',
		message: 'Method Not Allowed'
	},
	406: {
		code: 406,
		title: 'NOT_ACCEPTABLE',
		message: 'Not Acceptable'
	},
	407: {
		code: 407,
		title: 'PROXY_AUTHENTICATION_REQUIRED',
		message: 'Proxy Authentication Required'
	},
	408: {
		code: 408,
		title: 'REQUEST_TIMEOUT',
		message: 'Request Timeout'
	},
	409: {
		code: 409,
		title: 'CONFLICT',
		message: 'Conflict'
	},
	410: {
		code: 410,
		title: 'GONE',
		message: 'Gone'
	},
	411: {
		code: 411,
		title: 'LENGTH_REQUIRED',
		message: 'Length Required'
	},
	412: {
		code: 412,
		title: 'PRECONDITION_FAILED',
		message: 'Precondition Failed'
	},
	413: {
		code: 413,
		title: 'REQUEST_TOO_LONG',
		message: 'Request Entity Too Large'
	},
	414: {
		code: 414,
		title: 'REQUEST_URI_TOO_LONG',
		message: 'Request-URI Too Long'
	},
	415: {
		code: 415,
		title: 'UNSUPPORTED_MEDIA_TYPE',
		message: 'Unsupported Media Type'
	},
	416: {
		code: 416,
		title: 'REQUESTED_RANGE_NOT_SATISFIABLE',
		message: 'Requested Range Not Satisfiable'
	},
	417: {
		code: 417,
		title: 'EXPECTATION_FAILED',
		message: 'Expectation Failed'
	},
	418: {
		code: 418,
		title: 'IM_A_TEAPOT',
		message: 'I\'m a teapot'
	},
	419: {
		code: 419,
		title: 'INSUFFICIENT_SPACE_ON_RESOURCE',
		message: 'Insufficient Space on Resource'
	},
	420: {
		code: 420,
		title: 'METHOD_FAILURE',
		message: 'Method Failure'
	},
	421: {
		code: 421,
		title: 'MISDIRECTED_REQUEST',
		message: 'Misdirected Request'
	},
	422: {
		code: 422,
		title: 'UNPROCESSABLE_ENTITY',
		message: 'Unprocessable Entity'
	},
	423: {
		code: 423,
		title: 'LOCKED',
		message: 'Locked'
	},
	424: {
		code: 424,
		title: 'FAILED_DEPENDENCY',
		message: 'Failed Dependency'
	},
	428: {
		code: 428,
		title: 'PRECONDITION_REQUIRED',
		message: 'Precondition Required'
	},
	429: {
		code: 429,
		title: 'TOO_MANY_REQUESTS',
		message: 'Too Many Requests'
	},
	431: {
		code: 431,
		title: 'REQUEST_HEADER_FIELDS_TOO_LARGE',
		message: 'Request Header Fields Too Large'
	},
	451: {
		code: 451,
		title: 'UNAVAILABLE_FOR_LEGAL_REASONS',
		message: 'Unavailable For Legal Reasons'
	},
	500: {
		code: 500,
		title: 'INTERNAL_SERVER_ERROR',
		message: 'Internal Server Error'
	},
	501: {
		code: 501,
		title: 'NOT_IMPLEMENTED',
		message: 'Not Implemented'
	},
	502: {
		code: 502,
		title: 'BAD_GATEWAY',
		message: 'Bad Gateway'
	},
	503: {
		code: 503,
		title: 'SERVICE_UNAVAILABLE',
		message: 'Service Unavailable'
	},
	504: {
		code: 504,
		title: 'GATEWAY_TIMEOUT',
		message: 'Gateway Timeout'
	},
	505: {
		code: 505,
		title: 'HTTP_VERSION_NOT_SUPPORTED',
		message: 'HTTP Version Not Supported'
	},
	507: {
		code: 507,
		title: 'INSUFFICIENT_STORAGE',
		message: 'Insufficient Storage'
	},
	511: {
		code: 511,
		title: 'NETWORK_AUTHENTICATION_REQUIRED',
		message: 'Network Authentication Required'
	}
]