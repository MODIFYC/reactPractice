import Button from "./Button";
import styles from "./App.modules.css";
import {useState, useEffect} from "react";

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setValue((prev) => prev +1);
    const onChange = (event) => setKeyword(event.target.value);
    useEffect(() => {
        console.log("CALL THE API....");
    }, []);
    useEffect(() => {
        console.log("I run when 'keyword' changes.");
    }, [keyword]);
    useEffect(() => {
        console.log("I run when 'counter' changes.");
    }, [counter]);

    return (
    <div>
        <h1>{counter}</h1>
        <button onClick={onClick}>click me</button>
        <hr />
        <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
    </div>
    )
}

export default App;