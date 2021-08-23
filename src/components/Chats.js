import React from 'react'
import { useHistory } from 'react-router'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import { useSelector } from 'react-redux'

export default function Chats() {
    const history = useHistory()

    const chats = useSelector((state) => state.chats)

    const handleChatLinkClick = (chat) => {
        history.push(`/chats/${chat.id}`)
    }

    return (
        <div className="chats">
            <List className="chats__sidebar" subheader={<p>Список чатов</p>}>
                {Object.values(chats).map((chat) => (
                    <div className="chats__sidebar__item" key={chat.id}>
                        <ListItem
                            button
                            component="a"
                            id={chat.id}
                            onClick={() => handleChatLinkClick(chat)}
                        >
                            {chat.name}
                        </ListItem>
                    </div>
                ))}
            </List>
        </div>
    )
}