import React from "react";
import { ActionTypes, ProfilePageType } from "../../Redux/state";
import Posts from "./Posts/Posts";
import style from './profile.module.css'
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    profile: ProfilePageType
    dispatch: (action: ActionTypes) => void
}

export const Profile = (props: ProfilePropsType) => {
    return <div className={style.content}>
        <ProfileInfo />
        <Posts data={props.profile} postText={props.profile.postText} dispatch={props.dispatch} />
    </div>
}