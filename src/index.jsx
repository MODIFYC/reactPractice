import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

function Btn({text, fontSize = 15}){  // == Btn(props)
    return (
        <button 
        style={{
            backgroundColor: "skyblue",
            color: "white",
            padding: "10px 20px",
            border: 0,
            borderRadius: 10,
            fontSize,
        }}>
            {text} {/* == props.text */}
        </button>
    )
}

// 입력값 정의: propTypes
//npm install --save prop-types
Btn.propTypes = {
    text: PropTypes.string.isRequired,  //isRequired: 필수값
    fontSize: PropTypes.number,
}

function App() {
    return (
    <div>
        <Btn text="Save Changes" fontSize={18} />
        <Btn text="Continue" />
    </div>
    )
}

// export default App;
ReactDOM.render(<App />, document.getElementById("root"));