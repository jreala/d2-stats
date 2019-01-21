import assign from 'lodash/assign';

export default class HttpClient {

    static get __config() {
        return {
            headers: new Headers({
                'X-API-Key': process.env.API_KEY
            }),
            mode: 'cors',
            cache: 'default'
        };
    }

    static async get(url) {
        const data = await fetch(url, assign(this.__config, { method: 'get' }));
        return data.json();
    }

}
