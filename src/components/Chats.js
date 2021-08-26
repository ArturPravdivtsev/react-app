import React from 'react'
import { useHistory } from 'react-router'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux'
import { addChatToDatabase, removeChatFromDatabase, subscribeChatsChangings } from '../store/actions/chats'

export default function Chats() {
    const [newChatName, setNewChatName] = React.useState('')

    const history = useHistory()

    const chats = useSelector((state) => state.chats)

    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(subscribeChatsChangings())
    }, [])

    const handleChatLinkClick = (chat) => {
        history.push(`/chats/${chat.id}`)
    }

    const handleAddChat = () => {
        dispatch(addChatToDatabase(`chat${Date.now()}`, newChatName))
    }

    const handleRemoveChat = (chatId) => {
        dispatch(removeChatFromDatabase(chatId))
    }

    const handleSetNewChatName = ({ target: { value } }) => {
        setNewChatName(value)
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
                        <IconButton
                            variant="contained"
                            onClick={() => handleRemoveChat(chat.id)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </div>
                ))}
            </List>
            <TextField
                id="outlined-basic"
                label="Имя чата"
                placeholder="Введите имя чата"
                variant="outlined"
                name="text"
                fullWidth
                required
                margin="normal"
                autoFocus={true}
                value={newChatName}
                onChange={handleSetNewChatName}
            />
            <Button onClick={handleAddChat}>Создать чат</Button>
        </div>
    )
}