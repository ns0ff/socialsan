import React from "react";
import { ProfilePageType } from "../../../Redux/state";
import PostMessage from "./Message/PostMessage";
import style from './posts.module.css'


function Posts(props: ProfilePageType) {
    const postsElements = props.postData.map(el => <PostMessage id={el.id} message={el.message} likes={el.likes} />)

    return (
        <div>
            My posts:
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={style.postBlock}>
                {postsElements}
            </div>
        </div>
    )
}

export default Posts