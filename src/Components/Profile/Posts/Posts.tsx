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
                <PostMessage message="Hello world!" likes={15} />
                <PostMessage message="Lorem ipsum dolor sit amet consectetur adipisicing." likes={54} />
            </div>
        </div>
    )
}

export default Posts