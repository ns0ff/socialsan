import { ConversationPageType } from './state';

const conversationsReducer = (conversationsData: ConversationPageType, action: any) => {
    if (action.type === 'ADD-MESSAGE'){
        conversationsData.newMessageBody && conversationsData.messageData.push({id: 3, message: conversationsData.newMessageBody});
        conversationsData.newMessageBody = ''
    } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
        conversationsData.newMessageBody = action.newMessageText
    }

    return conversationsData
}

export default conversationsReducer