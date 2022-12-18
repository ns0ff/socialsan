import { ConversationPageType } from './state';

const conversationsReducer = (conversationsData: ConversationPageType, action: any) => {
    switch(action.type){
        case 'ADD-MESSAGE' :
            conversationsData.newMessageBody && conversationsData.messageData.push({id: 3, message: conversationsData.newMessageBody});
            conversationsData.newMessageBody = ''
            return conversationsData
        case 'UPDATE-NEW-MESSAGE-TEXT' :
            conversationsData.newMessageBody = action.newMessageText
            return conversationsData
        default: return conversationsData
    }
}

export default conversationsReducer