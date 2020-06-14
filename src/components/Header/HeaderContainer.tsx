import Header from "./Header";
import {connect} from 'react-redux';
import {isAuthThunk} from "../../redux/auth-reducer";
import {authSelectors} from "../../redux/selectors";
import {appStateType} from "../../redux/redux-store";

export type authDataType = {
    id: number
    login: string
    email: string
}

type mapStatePropsType = {
    isAuth: boolean
    authData: authDataType
}

type mapDispatchPropsType = {
    isAuthThunk: () => void
}

let mapStateToProps = (state: appStateType): mapStatePropsType => {
    return {
        isAuth: authSelectors.isAuthSimpleSelector(state),
        authData: authSelectors.authDataSimpleSelector(state)
    }
};

export default connect<mapStatePropsType, mapDispatchPropsType, {}, appStateType>(mapStateToProps, {isAuthThunk})(Header);
