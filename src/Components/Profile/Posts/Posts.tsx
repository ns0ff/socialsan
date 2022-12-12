import React, { useRef } from "react";
import { ProfilePageType } from "../../../Redux/state";
import PostMessage from "./Message/PostMessage";
import style from './posts.module.css'

type PostsSectionType = {
    data: ProfilePageType
    addPost: (text: string) => void
}


function Posts(props: PostsSectionType) {
    const postsElements = props.data.postData.map(el => <PostMessage id={el.id} message={el.message} likes={el.likes} />)

    let newPost = useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
        let text = newPost.current?.value
        if (text) props.addPost(text)
        if (newPost.current) newPost.current.value = ''
    }

    return (
        <div>
            My posts:
            <div>
                <textarea ref={newPost}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={style.postBlock}>
                {postsElements}
            </div>
        </div>
    )
}

export default Posts