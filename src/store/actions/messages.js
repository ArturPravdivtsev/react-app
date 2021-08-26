import { AUTHORS } from '../../constants'
import firebase from 'firebase'

export const ADD_MESSAGE = 'MESSAGES:ADD_MESSAGE'

export const addMessage = (chatId, message, author) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        message,
        author
    },
})

export const sendMessageFromBot = (chatId, message) => {
    return () => {
        firebase.database().ref('messages').child(chatId).push(message)
        setTimeout(() => {
            firebase
                .database()
                .ref('messages')
                .child(chatId)
                .push({
                    id: `message${Date.now()}`,
                    author: AUTHORS.BOT,
                    text: 'Привет, я - бот!',
                })
        }, 1500)
    }
}

export const subscribeOnMessagesChanges = (chatId) => {
    return (dispatch, getState) => {
        firebase
            .database()
            .ref('messages')
            .child(chatId)
            .on('child_added', (snapshot) => {
                console.log('child_added', snapshot.val())

                dispatch(addMessage(chatId, snapshot.val()))
            })

        firebase
            .database()
            .ref('messages')
            .child(chatId)
            .on('child_changed', (snapshot) => {
                console.log('child_changed', snapshot.val())

                dispatch(addMessage(chatId, snapshot.val()))
            })
    }
}