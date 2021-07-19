import './App.css';

function Message(props) {
    return <p className="example_text" style={{ border: '2px solid red', borderRadius: '8px'}}>{props.text}</p>
}

function App() {
  return (
    <div className="App">
      <Message text="Hello from Message component!" />
    </div>
  );
}

export default App;
