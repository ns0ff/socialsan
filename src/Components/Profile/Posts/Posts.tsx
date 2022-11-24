import React from "react";
import PostMessage from "./Message/PostMessage";

function Posts() {
    return (
        <div>
            My posts:
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
            <PostMessage message="Hello world"/>
            <PostMessage message="Another post message"/>
            </div>
        </div>
    )
}

export default Posts