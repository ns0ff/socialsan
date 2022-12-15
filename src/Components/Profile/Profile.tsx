import React from "react";
import { ProfilePageType } from "../../Redux/state";
import Posts from "./Posts/Posts";
import style from './profile.module.css'
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

type ProfileType = {
    profile: ProfilePageType
    addPost: () => void
    newPostText: (newText: string) => void
}

export const Profile = (props: ProfileType) => {
    return <div className={style.content}>
        <ProfileInfo />
        <Posts data={props.profile} addPost={props.addPost} postText={props.profile.postText} newPostText={props.newPostText} />
    </div>
}