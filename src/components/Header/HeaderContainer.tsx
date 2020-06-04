import Header from "./Header";
import {connect} from 'react-redux';
import {isAuthThunk} from "../../redux/auth-reducer";
import {authSelectors} from "../../redux/selectors";

let mapStateToProps = (state: any) => {
    return{
        isAuth: authSelectors.isAuthSimpleSelector(state),
        authData: authSelectors.authDataSimpleSelector(state)
    }
};

export default connect(mapStateToProps, {isAuthThunk})(Header);
