
export const authSelectors = {
    isAuthSimpleSelector(state){
        return state.auth.isAuthorized
    },
    authDataSimpleSelector(state){
        return state.auth.authData
    }
};