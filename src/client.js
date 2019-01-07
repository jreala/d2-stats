import axios from 'axios';

export const BaseURL = 'https://bungie.net/';
export const Platform = 'Platform/';
export const Authorization = 'en/OAuth/Authorize';
export const Token = 'Platform/App/OAuth/token/';
export const Refresh = 'Platform/App/OAuth/token/';

const authorizeUrl = `${BaseURL}${Authorization}?client_id=25748&response_type=code`;

// const getClient = endpoint => axios.create({
//     baseURL: `${BaseURL}${endpoint}`,
//     timeout: 2000,
//     headers: { 'X-API-Key': 'd9e7de5ab11844d5988d1a67aeeda400' }
// });

export const authorize = () => {
    window.open(authorizeUrl, 'authWindow', 'width=400px, height=400px');

    window.addEventListener('storage', () => {
        if (localStorage.getItem('d2-stats-auth')) {
            console.log('found auth token!', localStorage.getItem('d2-stats-auth'));
        }
    });


};
