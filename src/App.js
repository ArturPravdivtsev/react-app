import './App.css';

function Example(props) {
    return <p className="example_text" style={{ border: '2px solid red', borderRadius: '8px'}}>{props.text}</p>
}

function App() {
  return (
    <div className="App">
      <Example text="Hello from Example component!" />
    </div>
  );
}

export default App;
