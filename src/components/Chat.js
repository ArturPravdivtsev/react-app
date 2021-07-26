import React from 'react'
import { useParams, useHistory } from 'react-router'

const chatArr = [
    {
        id: 0,
        name: 'Test1'
    },
    {
        id: 1,
        name: 'Test2'
    },
    {
        id: 2,
        name: 'Test3'
    }
]

const Chat = (props) => {
    const { chatId } = useParams()
    const history = useHistory()
    const element = chatArr.find(chat => {
        return chat.id === +chatId
    })
    if (!element) {
        history.push('/404');
    }

    return (
        <div>
            <p>Certain chat page, {chatId}</p>
        </div>
    )
}

export default Chat