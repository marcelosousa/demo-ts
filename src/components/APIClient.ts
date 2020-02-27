type Headers = Record<string, string>;

export default class APIClient {
    baseUrl: string;
    baseHeaders: Headers;

    constructor(baseUrl: string, headers: Headers = {}) {
        this.baseUrl = baseUrl;
        this.baseHeaders = {
            'Content-Type': 'application/json',
            ...headers,
        };
    }

    async get(url: string) {
        const response = await fetch(`${this.baseUrl}/${url}`, {
            method: 'GET',
            headers: this.baseHeaders,
        });

        return response.json();
    }
}