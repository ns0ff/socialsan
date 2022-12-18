import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { ActionTypes, addMessageAC, ConversationPageType, ConversationsItemsType, MessageItemsType, updateMessageTextAC } from "../../Redux/state";
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

type ConversationsPropsType = {
    conversations: ConversationPageType
    dispatch: (action: ActionTypes) => void
}

function Conversations(props: ConversationsPropsType) {
    const conversationsElements = props.conversations.conversationsData.map(el => <ConversationItem id={el.id} name={el.name} />)
    const messagesElements = props.conversations.messageData.map(message => <DialogMessage id={message.id} message={message.message} />)

    let newMessage = useRef<HTMLTextAreaElement>(null)

    const addMessage = () => {
        props.dispatch(addMessageAC())
    }

    const onMessageChangeHandler = () => {
        let newMessageText = newMessage.current?.value
        newMessageText && props.dispatch(updateMessageTextAC(newMessageText))
    }

    return (
        <div className={style.conversations}>
            <div className={style.dialogs}>

                {conversationsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div>
                <textarea onChange={onMessageChangeHandler} ref={newMessage} value={props.conversations.newMessageBody} />
                <button onClick={addMessage}>Send</button>
            </div>
            </div>
        </div>
    )
}

export default Conversations