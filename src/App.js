import './App.css';
import { useState } from 'react';
import Draggable from 'react-draggable';

function App() {
  const [warn, setWarn] = useState(false)
  const [warn2, setWarn2] = useState(false)
  const [warn3, setWarn3] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <Draggable>
          <div style={{width: "300px", height: "150px", border: "4px white", borderRadius: "8px", background: warn ? "#EAD94C" : "#D1D1D1", cursor: "grab", color: "white", display: "flex", flexDirection: "column"}}>
            onClick
            <button onClick={()=> setWarn(!warn)} style={{cursor: "pointer", background: "#282c34", color: "white", borderRadius: "4px",  padding: "6px", margin: "4px"}}>Switch Color</button>
          </div>
        </Draggable>
        <br/>
        <Draggable>
          <div style={{width: "300px", height: "150px", border: "4px white", borderRadius: "8px", background: warn2 ? "#EAD94C" : "#D1D1D1", cursor: "grab", color: "white", display: "flex", flexDirection: "column"}}>
            onPointerDown
            <button onPointerDown={()=> setWarn2(!warn2)} style={{cursor: "pointer", background: "#282c34", color: "white", borderRadius: "4px",  padding: "6px", margin: "4px"}}>Switch Color</button>
          </div>
        </Draggable>
        <br/>
        <Draggable cancel='button'>
          <div style={{width: "300px", height: "150px", border: "4px white", borderRadius: "8px", background: warn3 ? "#EAD94C" : "#D1D1D1", cursor: "grab", color: "white", display: "flex", flexDirection: "column"}}>
            onClick++
            <button onClick={()=> setWarn3(!warn3)} style={{cursor: "pointer", background: "#282c34", color: "white", borderRadius: "4px",  padding: "6px", margin: "4px"}}>Switch Color</button>
          </div>
        </Draggable>
        <br/>
        <Draggable>
          <div style={{width: "300px", height: "150px", border: "4px white", borderRadius: "8px", background: "#D1D1D1", cursor: "grab", color: "white", display: "flex", flexDirection: "column"}}>
            InputField
            <input style={{background: "#282c34", color: "white", borderRadius: "4px",  padding: "6px", margin: "4px"}}/>
          </div>
        </Draggable>
        <br/>
        <Draggable cancel="input">
          <div style={{width: "300px", height: "150px", border: "4px white", borderRadius: "8px", background: "#D1D1D1", cursor: "grab", color: "white", display: "flex", flexDirection: "column"}}>
            InputField++
            <input style={{background: "#282c34", color: "white", borderRadius: "4px",  padding: "6px", margin: "4px"}}/>
          </div>
        </Draggable>
      </header>
    </div>
  );
}

export default App;
