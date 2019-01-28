import assign from 'lodash/assign';
import isEmpty from 'lodash/isEmpty';
import { SUCCESS } from './constants';

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

    static validateData(data) {
        if (isEmpty(data)) {
            console.warn('Validate Data, parsed data is empty', data);
            return {
                Valid: false,
            };
        }

        if (data.ErrorStatus && data.ErrorStatus !== SUCCESS) {
            console.warn('Validate data, parsed data has an error status', data);
            return {
                Valid: false,
                ErrorCode: data.ErrorCode,
                ErrorStatus: data.ErrorStatus,
                Message: data.Message
            };
        }

        if (!isEmpty(data.Response)) {
            console.log('Validate data, parsed data response length is good!', data);
            return {
                Valid: true,
                Response: data.Response
            };
        }

        console.warn('Validate data, parsed data has no length', data);
        return assign({}, data, { Valid: false });
    }

    static async get(url) {
        const data = await fetch(url, assign(this.__config, { method: 'get' }));
        return data.json();
    }

}
