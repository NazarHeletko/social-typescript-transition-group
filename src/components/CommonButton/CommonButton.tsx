import React from 'react'
import Ripples from "react-ripples"
import style from './CommonButton.module.css'

type PropsType = {
    title: string
    handler: () => void
}

let CommonButton: React.FC<PropsType> = ({title, handler}) => {
    return(
        <Ripples during={1200}>
            <button data-test='loginBtnTest' onClick={()=> handler()} className={style.loginBtn}>{title}</button>
        </Ripples>
    )
};

export default CommonButton;