import { Button } from 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Btn({text, big}){  // == Btn(props)
    return (
        <button 
        style={{
            backgroundColor: "skyblue",
            color: "white",
            padding: "10px 20px",
            border: 0,
            borderRadius: 10,
            fontSize: big ? 30 : 15,
        }}>
            {text} {/* == props.text */}
        </button>
    )
}

function App() {
    return (
    <div>
        <Btn text="Save Changes" big={true} />
        <Btn text="Continue" big={false} />
    </div>
    )
}

// export default App;
ReactDOM.render(<App />, document.getElementById("root"));