import {auth, resultCodesEnum} from '../api/api';
import {authDataType} from "../components/Header/HeaderContainer";
import {appStateType} from "./redux-store";
import {Dispatch} from "redux";

const IS_AUTHORIZED = 'IS_AUTHORIZED';

let initialState = {
    isAuthorized: false,
    authData: {
        id: 0,
        login: '',
        email: ''
    }
};

export type initialStateType = typeof initialState;

const authReducer = (state = initialState, action: actionsTypes): initialStateType => {
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

type actionsTypes = isAuthAcType

type isAuthAcType = {
    type: typeof IS_AUTHORIZED,
    isAuthorized: boolean,
    authData: authDataType
}

export const isAuthAC = (isAuthorized: boolean, authData: authDataType): isAuthAcType => {
    return {
        type: IS_AUTHORIZED,
        isAuthorized,
        authData
    }
};

export const isAuthThunk = () => (dispatch: Dispatch<actionsTypes>, getState: () => appStateType) => {
    auth.isAuthApi().then((response:any) => {
        if(response.resultCode === resultCodesEnum.Success){
            dispatch(isAuthAC(true, response.data))
        }
    })
};

export default authReducer;