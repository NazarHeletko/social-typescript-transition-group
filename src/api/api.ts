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

type isAuthResponseDataType = {
    id: number
    email: string
    login: string
}

type isAuthResponseType = {
    data: isAuthResponseDataType
    resultCode: number
    messages: Array<string>
}

type logoutResponseType = {
    resultCode: number
    messages: Array<string>
    data: object
}

export const auth = {
    isAuthApi(){
        return instance.get<isAuthResponseType>('auth/me').then(response => response.data)
    },
    logoutApi(){
        return instance.delete<logoutResponseType>('auth/login').then(response => response.data)
    }
};