import {auth} from '../api/api';

const IS_AUTHORIZED = 'IS_AUTHORIZED';

export type initialStateType = {
    isAuthorized: boolean,
    authData: null | object
}

let initialState: initialStateType = {
    isAuthorized: false,
    authData: null
};

const authReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case IS_AUTHORIZED:
            return{
                ...state,
                isAuthorized: action.isAuthorized,
                authData: action.authData
            };
        default:
            return state
    }
};

type isAuthAcType = {
    type: typeof IS_AUTHORIZED,
    isAuthorized: boolean,
    authData: object
}

const isAuthAC = (isAuthorized: boolean, authData: object): isAuthAcType => {
    return {
        type: IS_AUTHORIZED,
        isAuthorized,
        authData
    }
};

export const isAuthThunk = () => (dispatch:any) => {
    auth.isAuthApi().then((response:any) => {
        if(response.data.resultCode === 0){
            dispatch(isAuthAC(true, response.data.data))
        }
    })
};


export default authReducer;