import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'e9362b4d-b635-41af-8bdb-ede036ffc778'
    }
});

export enum resultCodesEnum  {
    Success = 0,
    Error = 1
}

type isAuthResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: number
    messages: Array<string>
}

export const auth = {
    isAuthApi(){
        return instance.get<isAuthResponseType>('auth/me').then(response => response.data)
    }
};