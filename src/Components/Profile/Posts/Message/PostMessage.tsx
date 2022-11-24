import React from "react";

type MessagePostType = {
    message: string
}

function PostMessage(props: MessagePostType) {
    return (
        <div>{props.message}</div>
    )
}

export default PostMessage