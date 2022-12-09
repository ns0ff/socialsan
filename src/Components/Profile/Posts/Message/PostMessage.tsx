import React from "react";
import { MessagePostType } from "../../../../Redux/state";
import style from './postmessage.module.css'

function PostMessage(props: MessagePostType) {
    return (
        <div className={style.item}>
            <img src={'https://randomuser.me/api/portraits/men/60.jpg'} alt={'userpic'} />
            {props.message}
            <div>
                <span>Likes: {props.likes}</span>
            </div>
        </div>
    )
}

export default PostMessage