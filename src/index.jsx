import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Btn({text, onClick}){  // == Btn(props)
    return (
        <button 
        onClick={onClick}
        style={{
            backgroundColor: "skyblue",
            color: "white",
            padding: "10px 20px",
            border: 0,
            borderRadius: 10,
        }}>
            {text} {/* == props.text */}
        </button>
    )
}

const MemorizedBtn= React.memo(Btn)

function App() {
    const [value, setValue] = React.useState("Save Changes");
    const changeValue = () => setValue("Revert Changes");
    return (
    <div>
        <MemorizedBtn text={value} onClick={changeValue} />
        <MemorizedBtn text="Continue" />
    </div>
    )
}

// export default App;
ReactDOM.render(<App />, document.getElementById("root"));