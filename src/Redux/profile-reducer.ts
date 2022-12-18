import { ProfilePageType } from "./state"

const profileReducer = (profileData: ProfilePageType, action: any) => {
  if (action.type === "ADD-POST") {
    profileData.postText &&
    profileData.postData.push({
        id: 3,
        message: profileData.postText,
        likes: 0,
      })
      profileData.postText = ""
  } else if (action.type === "UPDATE-NEW-POST-TEXT") {
    profileData.postText = action.newText
  }

  return profileData
}

export default profileReducer