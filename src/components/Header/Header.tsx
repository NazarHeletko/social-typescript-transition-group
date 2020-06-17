import React, {useEffect} from 'react';
import style from './Header.module.css';
import Ripples from 'react-ripples';
import reactLogo from '../../assets/img/react-icon.png';
import { CSSTransition } from 'react-transition-group';
import './Header.css';

type authDataType = {
    id: number
    login: string
    email: string
}

type PropsType = {
    isAuth: boolean
    authData: authDataType
    isAuthThunk: () => void
}

let Header: React.FC<PropsType> = ({isAuth, authData, isAuthThunk}) => {
    useEffect(()=>{
        isAuthThunk();
    }, [isAuth]);

    // @ts-ignore
    // @ts-ignore
    return(
        <CSSTransition
        in={true}
        timeout={{appear: 1000}}
        classNames={'header-animate-'}
        appear={true}>
            <div className={style.header} data-test='headerTest'>
                <div className={style.logo} data-test='logoTest'>
                    <img data-test='reactLogoTest' src={reactLogo}/>
                    {!isAuth ? <span data-test='socialTest'>Social</span> : <span data-test='helloTest'>Hello, {authData.login}</span>}
                </div>
                <div className={style['btn-wrapper']}>
                    {!isAuth ?
                        <Ripples data-test='loginBtnTest' during={1200}>
                            <button className={style.loginBtn}>Login</button>
                        </Ripples> :
                        <Ripples data-test='logoutBtnTest' during={1200}>
                            <button className={style.loginBtn}>Logout</button>
                        </Ripples>}
                </div>
            </div>
        </CSSTransition>
    );
};

export default Header;