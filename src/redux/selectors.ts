import {appStateType} from "./redux-store";

export const authSelectors = {
    isAuthSimpleSelector(state: appStateType){
        return state.auth.isAuthorized
    },
    authDataSimpleSelector(state: appStateType){
        return state.auth.authData
    }
};