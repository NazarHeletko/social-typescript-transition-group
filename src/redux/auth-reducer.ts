import {auth, resultCodesEnum} from '../api/api';
import {authDataType} from "../components/Header/HeaderContainer";
import {appStateType} from "./redux-store";
import {Dispatch} from "redux";

const IS_AUTHORIZED = 'IS_AUTHORIZED';
const LOGOUT = 'LOGOUT';

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
        case LOGOUT:
            return{
                ...state,
                isAuthorized: false,
                authData: {
                    id: 0,
                    login: '',
                    email: ''
                }
            };
        default:
            return state
    }
};

type actionsTypes = isAuthAcType | logoutAcType

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

type logoutAcType = {
    type: typeof LOGOUT
}

export const logoutAC = (): logoutAcType => {
    return {
        type: LOGOUT
    }
};

export const isAuthThunk = () => (dispatch: Dispatch<actionsTypes>) => {
    auth.isAuthApi().then((response) => {
        if(response.resultCode === resultCodesEnum.Success){
            dispatch(isAuthAC(true, response.data))
        }
    })
};

export const logoutThunk = () => (dispatch: Dispatch<actionsTypes>) => {
    auth.logoutApi().then(response => {
        if(response.resultCode === resultCodesEnum.Success){
            dispatch(logoutAC())
        }
    })
};

export default authReducer;