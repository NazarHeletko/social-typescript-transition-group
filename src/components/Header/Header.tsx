import React, {useEffect} from 'react';
import style from './Header.module.css';
import Ripples from 'react-ripples';
import reactLogo from '../../assets/img/react-icon.png';
import { CSSTransition } from 'react-transition-group';
import './Header.css';


let Header = (props:any) => {
    useEffect(()=>{
        props.isAuthThunk();
    }, [props.isAuth]);

    return(
        <CSSTransition
        in={true}
        timeout={{appear: 1000}}
        classNames={'header-animate-'}
        appear={true}>
            <div className={style.header}>
                <div className={style.logo}>
                    <img src={reactLogo}/>
                    {!props.isAuth ? <span>Social</span> : <span>Hello, {props.authData.login}</span>}
                </div>
                <div className={style['btn-wrapper']}>
                    {!props.isAuth ?
                        <Ripples during={1200}>
                            <button className={style.loginBtn}>Login</button>
                        </Ripples> :
                        <Ripples during={1200}>
                            <button className={style.loginBtn}>Logout</button>
                        </Ripples>}
                </div>
            </div>
        </CSSTransition>
    );
};

export default Header;