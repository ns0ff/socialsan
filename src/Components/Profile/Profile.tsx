import React from "react";
import { ProfilePageType } from "../../Redux/state";
import Posts from "./Posts/Posts";
import style from './profile.module.css'
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

type ProfileType = {
    profile: ProfilePageType
}

export const Profile = (props: ProfileType) => {
    return <div className={style.content}>
        <ProfileInfo />
        <Posts postData={props.profile.postData} />
    </div>
}