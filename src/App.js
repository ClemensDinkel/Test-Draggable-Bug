import './App.css';
import { useState } from 'react';
import Draggable from 'react-draggable';

function App() {
  const [warn, setWarn] = useState(false)
  const [warn2, setWarn2] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <Draggable>
          <div style={{width: "300px", height: "150px", border: "4px white", borderRadius: "8px", background: warn ? "#EAD94C" : "#D1D1D1", cursor: "grab", color: "white", display: "flex", flexDirection: "column"}}>
            onClick
            <button onClick={()=> setWarn(!warn)} style={{cursor: "pointer", background: "#282c34", color: "white", borderRadius: "4px",  padding: "6px"}}>Switch Color</button>
          </div>
        </Draggable>
        <br/>
        <Draggable>
          <div style={{width: "300px", height: "150px", border: "4px white", borderRadius: "8px", background: warn2 ? "#EAD94C" : "#D1D1D1", cursor: "grab", color: "white", display: "flex", flexDirection: "column"}}>
            onPointerDown
            <button onPointerDown={()=> setWarn2(!warn2)} style={{cursor: "pointer", background: "#282c34", color: "white", borderRadius: "4px",  padding: "6px"}}>Switch Color</button>
          </div>
        </Draggable>
      </header>
    </div>
  );
}

export default App;
