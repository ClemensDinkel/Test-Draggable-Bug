import './App.css';
import Draggable from 'react-draggable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Draggable>
          <div style={{width: "100px", height: "100px", border: "4px white", borderRadius: "8px", background: "aquamarine", cursor: "grab"}}>
            <button onPointerDown={()=> console.log("test")} style={{cursor: "pointer"}}>TEST</button>
          </div>
        </Draggable>
      </header>
    </div>
  );
}

export default App;
