import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'e9362b4d-b635-41af-8bdb-ede036ffc778'
    }
});

export const auth = {
    isAuthApi(){
        return instance.get('auth/me');
    }
};