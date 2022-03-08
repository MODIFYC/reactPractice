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
                    value = {inverted ? amount*60 : amount}
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

function KmToMiles(){
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
                <label htmlFor = "miles">Miles</label> 
                <input
                    value = {inverted ? amount * 0.621371 : amount}
                    id ="miles"
                    placeholder='Miles'
                    type="number"
                    onChange={onChange}
                    disabled={inverted}
                />
            </div>
            <div>
                <label htmlFor = "km">Km</label> 
                <input
                    value = {inverted ? amount : amount * 1.60934}
                    id ="km"
                    placeholder='Km'
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

function App() {
    const [index, setIndex] = React.useState("xx");
    const onSelect = (event) =>{
        setIndex(event.target.value);
    }
    return (
        <div>
            <h1>Converter</h1>
            <select value={index} onChange = {onSelect}>
                <option value = "xx">Select your units</option>
                <option value = "0">Minute & hours</option>
                <option value = "1">Km & Miles</option>
            </select>
            <hr />
            {index === "xx" ? "Please select your untis": null}
            {index === "0" ? <MinutesTohours /> : null}
            {index === "1" ? <KmToMiles /> : null}
            <hr />
        </div>
    )
}

// export default App;
ReactDOM.render(<App />, document.getElementById("root"));