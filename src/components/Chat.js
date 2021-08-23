import React from 'react'
import { useHistory, useParams } from 'react-router'
import Message from './Message'
import { AUTHORS } from '../constants'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../store/actions/messages'
import { useIsChatExists } from '../hooks/useIsChatExists'

const Chat = (props) => {
    const { chatId } = useParams()
    const [message, setMessage] = React.useState('')
    const inputRef = React.useRef();

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            inputRef.current.focus();
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    const handleMessageChange = ({ target: { value } }) => {
        console.log(value)
        setMessage(value)
    }

    const history = useHistory()

    const messageList = useSelector((state) => state.messages[chatId] || [])
    const dispatch = useDispatch()

    const handleClick = () => {
        console.log(message)
        dispatch(
            addMessage(chatId, {
                id: `message${Date.now()}`,
                author: AUTHORS.ME,
                text: message,
            })
        )
    }

    const isChatExists = useIsChatExists({ chatId })

    if (!isChatExists) {
        history.push('/404');
    }

    return (
        <Grid item xs={10}>
            <ul>
                {messageList.length ? (
                    <>
                        {messageList.map((message) => (
                            <Message
                                key={message.id}
                                text={message.text}
                                author={message.author}
                            />
                        ))}
                    </>
                ) : null}
            </ul>
            <Container component="main" maxWidth="xs">
                <form noValidate>
                    <TextField
                        id="outlined-basic"
                        label="Сообщение"
                        placeholder="Введите сообщение"
                        variant="outlined"
                        name="text"
                        fullWidth
                        required
                        margin="normal"
                        autoFocus={true}
                        value={message}
                        ref={inputRef}
                        onChange={handleMessageChange}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleClick}
                        fullWidth
                    >
                        Отправить
                    </Button>
                </form>
            </Container>

        </Grid>
    )
}

export default Chat