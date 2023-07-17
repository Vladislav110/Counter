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
    setMaxInputValueActionCreator,
    setValueActionCreator
} from "./counter_reducer";
import {AppStateType} from "./redux_store";
import {useDispatch, useSelector} from "react-redux";


function App() {

    const counter = useSelector<AppStateType, InitialStateType>(state => state.counterPage)
    const dispatch = useDispatch();

    // useEffect(()=>{
    //     dispatch(setMinValueTC())
    // },[])
    //
    // useEffect(()=>{
    //     dispatch(setMaxValueTC())
    // },[])

    const resetCount = useCallback(() => {
        const action = resetCountActionCreator();
        dispatch(action);
    }, [])

    const setCount = useCallback(() => {
        dispatch(setCountActionCreator());
    }, [counter.count])

    const setInitialInputValue = useCallback((initialValue: number) => {
        dispatch(setInitialInputValueActionCreator(initialValue));
    }, [])

    const setMaxInputValue = useCallback((maxValue: number) => {
        dispatch(setMaxInputValueActionCreator(maxValue));
    }, [])

    const setValue = useCallback((initialValue: number) => {
        const action = setValueActionCreator(initialValue);
        dispatch(action);
    }, [])


    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<FirstPage
                    setInitialInputValue={setInitialInputValue}
                    count={counter.count}
                    MaxInputValue={counter.MaxInputValue}
                    InitialInputValue={counter.InitialInputValue}
                    counter={setCount}
                    Reset={resetCount}
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