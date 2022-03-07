import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function MinutesTohours() {
    const [amount, setAmount] = React.useState(0);
    const [inverted, setInverted] = React.useState(0);
    const onChange = (event) => {
        setAmount(event.target.value);
    };
    const reset = () => setAmount(0);
    const onInvert = () => {
        reset();
        setInverted((current) => !current);
    };
    return (
        <div>
            <div>
                <label htmlFor = "minutes">Minutes</label> 
                <input
                    value = {inverted ? amount * 60 : amount}
                    id ="minutes"
                    placeholder='Minutes'
                    type="number"
                    onChange={onChange}
                    disabled={inverted}
                />
            </div>
            <div>
                <label htmlFor = "hours">Hours</label> 
                <input
                    value = {inverted ? amount : Math.round(amount/60)}
                    id ="hours"
                    placeholder='Hours'
                    type="number"
                    onChange={onChange}
                    disabled={!inverted}
                />
            </div>
            <button onClick={reset}>Reset</button>
            <button onClick={onInvert}>{inverted ? "Turn back" : "Inverted"}</button>
        </div>
    )
}

// function KmToMiles(){
//     return(

//     )
// }

function App() {
    return (
        <div>
            <h1>Converter</h1>
            <h1 />
            <MinutesTohours />
            {/* <KmToMiles /> */}
        </div>
    )
}

// export default App;
ReactDOM.render(<App />, document.getElementById("root"));