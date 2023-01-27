import React, {useState} from 'react';
import './App.css';
import {FirstPage} from "./firstPage";
import {SecondPage} from "./secondPage";
import {Route, Routes} from "react-router-dom";

function App() {


    const [InitialInputValue, setInitialInputValue] = useState(0)

    const [MaxInputValue, setMaxInputValue] = useState(5)

    let [count, setCount] = useState(InitialInputValue)

    const counter = () => {
        if (count < MaxInputValue) {
            return setCount(++count)
        } else {
            return setCount(InitialInputValue)
        }
    }

    const Reset = () => {
        setCount(InitialInputValue)
    }

    return (
        <div className="App">
            <Routes>
                <Route path= "/FP" element = {<FirstPage
                    count={count}
                    MaxInputValue={MaxInputValue}
                    InitialInputValue={InitialInputValue}
                    counter={counter}
                    Reset={Reset}
                    setCount = {setCount}
                />}></Route>
                <Route path= "/SP" element = {<SecondPage
                    setInitialInputValue={setInitialInputValue}
                    setMaxInputValue = {setMaxInputValue}
                    InitialInputValue = {InitialInputValue}
                    MaxInputValue ={MaxInputValue}
                    setCount = {setCount}
                />}></Route>
            </Routes>
        </div>
    );
}

export default App;