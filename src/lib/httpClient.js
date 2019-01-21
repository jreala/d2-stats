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

    static get(url) {
        return fetch(url, assign(this.__config, { method: 'get' })).then(data => data.json());
    }

}
