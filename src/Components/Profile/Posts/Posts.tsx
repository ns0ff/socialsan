import React, { useRef } from "react";
import { ActionTypes, ProfilePageType } from "../../../Redux/state";
import PostMessage from "./Message/PostMessage";
import style from './posts.module.css'

type PostsSectionType = {
    data: ProfilePageType
    postText: string
    dispatch: (action: ActionTypes) => void
}


function Posts(props: PostsSectionType) {
    const postsElements = props.data.postData.map(el => <PostMessage id={el.id} message={el.message} likes={el.likes} />)

    let newPost = useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
        props.dispatch({ type: 'ADD-POST' })
    }

    const onPostChangeHandler = () => {
        let text = newPost.current?.value
        text && props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text })
    }

    return (
        <div>
            My posts:
            <div>
                <textarea onChange={onPostChangeHandler} ref={newPost} value={props.postText} />
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={style.postBlock}>
                {postsElements}
            </div>
        </div>
    )
}

export default Posts