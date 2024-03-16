export type Method = "GET" | "POST" | "PUT" | "DELETE";

export default class Requests {
	static async makeRequest(
		method: Method,
		action: string,
		body: any,
		params: any = {},
		headers: HeadersInit = {},
	): Promise<Response> {
		return this._makeRequest(method, action, params, headers, body);
	}

	static async makeAuthRequest(
		method: Method,
		action: string,
		body: any,
		params: any = {},
		headers: HeadersInit = {},
	): Promise<Response> {
		return this._makeRequest(
			method,
			action,
			params,
			{
				Authorization: localStorage.getItem("token") as string,
				...headers,
			},
			body,
		);
	}

	private static async _makeRequest(
		method: string,
		action: string,
		params: any,
		headers: HeadersInit,
		body: any,
	): Promise<Response> {
		return fetch(`${import.meta.env.VITE_API_URL}/api/${action}`, {
			method: method,
			mode: "cors",
			headers: headers,
			body: body ? JSON.stringify(body) : null,
		});
	}

	private static parseParams(params: any): string {
		return new URLSearchParams(params).toString();
	}
}
