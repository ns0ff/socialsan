import { ProfilePageType } from "./state"

const profileReducer = (profileData: ProfilePageType, action: any) => {
    switch(action.type) {
        case 'ADD-POST':
            profileData.postText &&
            profileData.postData.push({id: 3, message: profileData.postText, likes: 0})
            profileData.postText = ""
            return profileData
        case "UPDATE-NEW-POST-TEXT":
            profileData.postText = action.newText
            return profileData
        default:  return profileData
    }
}

export default profileReducer