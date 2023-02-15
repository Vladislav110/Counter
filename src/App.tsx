import React, {useCallback} from 'react';
import './App.css';
import {FirstPage} from "./firstPage";
import {SecondPage} from "./secondPage";
import {Route, Routes} from "react-router-dom";
import {
    InitialStateType,
    resetCountActionCreator,
    setCountActionCreator,
    setInitialInputValueActionCreator,
    setMaxInputValueActionCreator, setValueActionCreator
} from "./counter_reducer";
import {AppStateType} from "./redux_store";
import {useDispatch, useSelector} from "react-redux";


function App() {

    const counter = useSelector<AppStateType, InitialStateType>(state => state.counterPage)
    const dispatch = useDispatch();

    const resetCount = useCallback(() => {
        const action = resetCountActionCreator();
        dispatch(action);
    }, [])

    const setCount = useCallback(() => {
        const action = setCountActionCreator();
        dispatch(action);
    }, [])

    const setInitialInputValue = useCallback((initialValue: number) => {
        const action = setInitialInputValueActionCreator(initialValue);
        dispatch(action);
    }, [])

    const setMaxInputValue = useCallback((maxValue: number) => {
        const action = setMaxInputValueActionCreator(maxValue);
        dispatch(action);
    }, [])

    const setValue = useCallback((initialValue: number) => {
        const action = setValueActionCreator(initialValue);
        dispatch(action);
    }, [])


    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<FirstPage
                    count={counter.count}
                    MaxInputValue={counter.MaxInputValue}
                    InitialInputValue={counter.InitialInputValue}
                    counter={setCount}
                    Reset={resetCount}
                    setCount={setCount}
                />}></Route>
                <Route path="/SP" element={<SecondPage
                    setInitialInputValue={setInitialInputValue}
                    setMaxInputValue={setMaxInputValue}
                    InitialInputValue={counter.InitialInputValue}
                    MaxInputValue={counter.MaxInputValue}
                    setValue={setValue}
                />}></Route>
            </Routes>
        </div>
    );
}

export default App;