import React from "react";
import Posts from "./Posts/Posts";
import style from './profile.module.css'
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
    return <div className={style.content}>
        <ProfileInfo />
        <Posts />
    </div>
}