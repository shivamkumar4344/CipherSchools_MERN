
import './App.css';

function App() {
  const name = "REACT";
  return(
    <div>
      <h1 style={{
        color:"red",
        fontFamily:"sans-serif",
        textAlign:"center"

      }}>The Page is about {name}</h1>
      <p style={{
        backgroundColor:"yellow",
        textAlign:"center"
      }}>Hello from your creator {name}</p>
      
    </div>
  )
}

export default App;
