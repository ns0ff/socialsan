import React from "react";
import { NavLink } from "react-router-dom";
import { ConversationPageType, ConversationsItemsType, MessageItemsType } from "../../Redux/state";
import style from './conversations.module.css'


const ConversationItem = (props: ConversationsItemsType) => {
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const DialogMessage = (props: MessageItemsType) => {
    return <div key={props.id} className={style.message}>{props.message}</div>
}

type ConversationsType = {
    conversations: ConversationPageType
}

function Conversations(props: ConversationsType) {
    const conversationsElements = props.conversations.conversationsData.map(el => <ConversationItem id={el.id} name={el.name} />)
    const messagesElements = props.conversations.messageData.map(message => <DialogMessage id={message.id} message={message.message} />)

    return (
        <div className={style.conversations}>
            <div className={style.dialogs}>
                
                {conversationsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Conversations