import React from "react";
import PostMessage from "./Message/PostMessage";
import style from './posts.module.css'

function Posts() {
    return (
        <div>
            My posts:
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={style.postBlock}>
                <PostMessage message="Hello world!" likes={155} />
                <PostMessage message="Lorem ipsum dolor sit amet consectetur adipisicing." likes={54} />
            </div>
        </div>
    )
}

export default Posts