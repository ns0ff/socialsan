import conversationsReducer from "./conversations-reducer";
import profileReducer from "./profile-reducer";

// Types: ===============================================================================
export type StoreType = {
  _state: StateType
  _onChange: (state: StateType) => void
  subscriber: (callback: (state: StateType) => void) => void
  getState: () => StateType
  dispatch: (action: any) => void
};

export type StateType = {
  conversationPage: ConversationPageType
  profilePage: ProfilePageType
};

export type AppType = {
  store: StoreType
  dispatch: (action: ActionTypes) => void
};

export type ConversationPageType = {
  conversationsData: Array<ConversationsItemsType>
  messageData: Array<MessageItemsType>
  newMessageBody: string
};

export type ConversationsItemsType = {
  id: number
  name: string
};

export type MessageItemsType = {
  id: number
  message: string
};

export type ProfilePageType = {
  postData: Array<MessagePostType>
  postText: string
};

export type MessagePostType = {
  id: number
  message: string
  likes: number
};

// Action types
export type ActionTypes = AddPostActionType | UpdateTextActionType | AddMessageActionType | UpdateMessageTextActionType

export type AddPostActionType = {
    type: 'ADD-POST'
}

export type UpdateTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}

export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}

export type UpdateMessageTextActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newMessageText: string
}

// Action Creators ======================================================================
export let addPostAC = (): AddPostActionType => ({ type: 'ADD-POST' })
export let updatePostTextAC = (text: string): UpdateTextActionType => ({ type: 'UPDATE-NEW-POST-TEXT', newText: text })
export let addMessageAC = (): AddMessageActionType => ({ type: 'ADD-MESSAGE' })
export let updateMessageTextAC = (newMessageText: string): UpdateMessageTextActionType => ({ type: 'UPDATE-NEW-MESSAGE-TEXT', newMessageText: newMessageText })


// State: ===============================================================================
let store: StoreType = {
  _state: {
    conversationPage: {
      conversationsData: [
        { id: 1, name: "Marius Hutchinson" },
        { id: 2, name: "Jaimee Bryan" },
        { id: 3, name: "Tess Coffey" },
        { id: 4, name: "Myles Atherton" },
        { id: 5, name: "Crystal Heaton" },
        { id: 6, name: "Veer Cotton" },
        { id: 7, name: "Delta Twila" },
        { id: 8, name: "Giuseppa Riannon" },
      ],
      messageData: [
        { id: 1, message: "Hi" },
        {
          id: 2,
          message:
            "Qui ad sequi tempore dolorem nihil. Vel aliquam exercitationem temporibus et incidunt.",
        },
        {
          id: 3,
          message:
            "Voluptate itaque qui suscipit natus reiciendis deserunt. Est nulla accusantium autem.",
        },
        {
          id: 4,
          message:
            "Sapiente saepe quos et labore. Pariatur sunt est sit quis. Et hic quidem ratione.",
        },
        {
          id: 5,
          message:
            "Dolorem doloremque magni cum maiores vero facere ipsam. Quidem aut laudantium reiciendis praesentium.",
        },
        {
          id: 6,
          message:
            "Praesentium aut autem saepe tempore molestiae. Ut sed non eum porro in voluptate assumenda. Sit est illo consequatur.",
        },
      ],
      newMessageBody: ""
    },
    profilePage: {
      postData: [
        { id: 1, message: "hello world", likes: 15 },
        {
          id: 2,
          message:
            "Aliquid aliquam officia praesentium exercitationem omnis sapiente. A qui laudantium numquam quis doloremque. Voluptas non qui et.",
          likes: 5,
        },
      ],
      postText: "",
    },
  },
  _onChange() {
    console.log("Changed")
  },
  subscriber(callback) {
    this._onChange = callback
  },
  getState() {
    return this._state
  },
  dispatch(action: any) {
    this._state.conversationPage = conversationsReducer(this._state.conversationPage, action)
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._onChange(this._state)
  }
};

export default store