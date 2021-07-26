import React  from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './App.css';

const AUTHORS = {
  ME: 'Me',
  BOT: 'Bot',
}

function App() {
  const [messageList, setMessageList] = React.useState([])
  const [text, setText] = React.useState('')
  const [robot, setRobot] = React.useState(false)
  const inputRef = React.useRef();

  const chatArr = [
    {
      id: 0,
      name: 'Test1'
    },
    {
      id: 0,
      name: 'Test2'
    },
    {
      id: 0,
      name: 'Test3'
    }
  ]

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      inputRef.current.focus();
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  React.useEffect(() => {
    if(robot === true) {
      const messages = [...messageList, {text: 'Thanks!', author: AUTHORS.BOT}]
      setMessageList(messages)
      setRobot(false)
    }
  }, [robot, messageList]);

  const handleClick = React.useCallback(() => {
    const messages = [...messageList, {text, author: AUTHORS.ME}]
    setMessageList(messages)
    setRobot(true)
  }, [messageList, text])

  const handleTextChange = ({ target: { value } }) => {
    setText(value)
  }

  // this.refs.messageInput.value = this.refs.messageInput.value

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <List component="nav">
            {chatArr.map((chat, idx) => <ListItem divider button key={idx} ><ListItemText primary={chat.name} /></ListItem>)}
          </List>
        </Grid>
        <Grid item xs={10}>
          <ul>
            {messageList.map((message, idx) => <li key={idx} className={message.author === AUTHORS.BOT ? 'robot' : 'author'}>{message.author}: {message.text}</li>)}
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
                value={text}
                ref={inputRef}
                onChange={handleTextChange}
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
      </Grid>
    </div>
  );
}

export default App;
