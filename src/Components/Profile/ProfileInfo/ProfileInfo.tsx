import React from "react";
import style from './profileInfo.module.css'

export const ProfileInfo = () => {
    return <>
        <div>
            <img
                src="https://images.unsplash.com/photo-1636622697498-8f60b9226824?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                alt="cover" />
        </div>
        <div className={style.descriptionBlock}>
            Avatar and Description
        </div>
    </>
}