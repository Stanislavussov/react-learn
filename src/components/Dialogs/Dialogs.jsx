import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {

    const dialogs = [
        {id: 1, name: 'Malkin'},
        {id: 2, name: 'Jagr'},
        {id: 3, name: 'Ovechkin'},
    ]

    const message = [
        {id: 1, message: "How r u?"},
        {id: 2, message: "What is u city?"},
        {id: 3, message: "Where is fork?"},
        {id: 4, message: "Bottle of wine"},
        {id: 5, message: "Paper with answers"},
    ]

    let dialogElements = dialogs
        .map((dialog) => (<DialogItem name={dialog.name} id={dialog.id}/>));

    let messageElements = message
        .map((message) => <Message message={message.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div>
                {messageElements}
            </div>
        </div>
    )
}


export default Dialogs;