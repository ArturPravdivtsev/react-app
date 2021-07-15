import React  from 'react'
import './App.css';

function App() {
  const [messageList, setMessageList] = React.useState([])
  const [text, setText] = React.useState('')
  const [author, setAuthor] = React.useState('')
  const [robot, setRobot] = React.useState(false)

  React.useEffect(() => {
    if(robot === true) {
      const messages = [...messageList]
      messages.push({text: 'Thanks!', author: 'robot'})
      setMessageList(messages)
      setRobot(false)
    }
  }, [robot, messageList]);

  const handleClick = React.useCallback(() => {
    const messages = [...messageList]
    messages.push({text, author})
    setMessageList(messages)
    setRobot(true)
  }, [messageList, text, author])

  const handleTextChange = ({ target: { value } }) => {
    setText(value)
  }

  const handleAuthorChange = ({ target: { value } }) => {
    setAuthor(value)
  }

  return (
    <div className="App">
      <ul>
        {messageList.map((message) => <li className={message.author === 'robot' ? 'robot' : 'author'}>{message.author}: {message.text}</li>)}
      </ul>
      <div className="form">
        <div class="group"> 
          <input type="text" name="author" value={author} onChange={handleAuthorChange} />
          <span class="bar"></span>
          <label>Автор</label>
        </div>
        <div class="group"> 
          <input type="text" name="text" value={text} onChange={handleTextChange} />
          <span class="bar"></span>
          <label>Текст</label>
        </div>
        <button class="btn" onClick={handleClick}>Send</button>
      </div>
    </div>
  );
}

export default App;
