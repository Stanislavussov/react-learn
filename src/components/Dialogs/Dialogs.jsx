import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialogItems + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


const Message = (props) => {
    return (
        <div className={s.messages}>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}

const dialogsData = [
    {id: 1, name: 'Malkin'},
    {id: 2, name: 'Jagr'},
    {id: 3, name: 'Crosby'},
    {id: 4, name: 'Ovechkin'},
    {id: 5, name: 'Barzal'},
    {id: 6, name: 'Marner'}
]

const messageData = [
    {id: 1, message: "How are you"},
    {id: 2, message: "What is your name"},
    {id: 3, message: "Your favorite eat"},
    {id: 4, message: "Do you play sport"},

]

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name="Ovechkin" id="4"/>
                <DialogItem name="Barzal" id="5"/>
                <DialogItem name="Marner" id="6"/>
            </div>
            <div className={s.messages}>
                <Message id={messageData[0].id} message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
                <Message message={messageData[3].message}/>
            </div>
        </div>
    )
}

export default Dialogs;