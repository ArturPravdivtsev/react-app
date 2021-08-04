import { AUTHORS } from '../../constants'

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
    return (dispatch, getState) => {
        dispatch(addMessage(chatId, message))

        setTimeout(() => {
            dispatch(
                addMessage(chatId, {
                    id: `message${Date.now()}`,
                    author: AUTHORS.BOT,
                    text: 'Привет, я - бот!',
                })
            )
        }, 1500)
    }
}