let reRender = (state: StateType) => {
}

// Types:
export type StateType = {
    conversationPage: ConversationPageType
    profilePage: ProfilePageType
}

export type AppType = {
    state: StateType
    addPost: () => void
    newPostText: (newText: string) => void
}

export type ConversationPageType = {
    conversationsData: Array<ConversationsItemsType>
    messageData: Array<MessageItemsType>
}

export type ConversationsItemsType = {
    id: number
    name: string
}

export type MessageItemsType = {
    id: number
    message: string
}

export type ProfilePageType = {
    postData: Array<MessagePostType>
    postText: string
}

export type MessagePostType = {
    id: number
    message: string
    likes: number
}

// State:
export let state = {
    conversationPage: {
        conversationsData: [
            {id: 1, name: 'Marius Hutchinson'},
            {id: 2, name: 'Jaimee Bryan'},
            {id: 3, name: 'Tess Coffey'},
            {id: 4, name: 'Myles Atherton'},
            {id: 5, name: 'Crystal Heaton'},
            {id: 6, name: 'Veer Cotton'},
            {id: 7, name: 'Delta Twila'},
            {id: 8, name: 'Giuseppa Riannon'},
        ],
        messageData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Qui ad sequi tempore dolorem nihil. Vel aliquam exercitationem temporibus et incidunt.'},
            {id: 3, message: 'Voluptate itaque qui suscipit natus reiciendis deserunt. Est nulla accusantium autem.'},
            {id: 4, message: 'Sapiente saepe quos et labore. Pariatur sunt est sit quis. Et hic quidem ratione.'},
            {id: 5, message: 'Dolorem doloremque magni cum maiores vero facere ipsam. Quidem aut laudantium reiciendis praesentium.'},
            {id: 6, message: 'Praesentium aut autem saepe tempore molestiae. Ut sed non eum porro in voluptate assumenda. Sit est illo consequatur.'},
        ]
    },
    profilePage: {
        postData: [
            {id: 1, message: 'hello world', likes: 15},
            {id: 2, message: 'Aliquid aliquam officia praesentium exercitationem omnis sapiente. A qui laudantium numquam quis doloremque. Voluptas non qui et.', likes: 5},
        ],
        postText: ''
    }
}

export const addPost = () => {
    state.profilePage.postData.push({id: 3, message: state.profilePage.postText, likes: 0})
    reRender(state)
}

export const changePostText = (newText: string) => {
    state.profilePage.postText = newText
    reRender(state)
}

export const subscriber = (observer: (state: StateType) => void) => {
    reRender = observer
}