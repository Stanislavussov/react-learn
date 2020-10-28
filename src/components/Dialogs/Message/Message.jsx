import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Message = (props) => {

    return (
        <div className={s.messages}>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}


export default Message;