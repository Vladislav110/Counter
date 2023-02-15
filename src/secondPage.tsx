import React, {ChangeEvent} from 'react';
import {NavLink} from "react-router-dom";

type SecondPagePropsTypes = {
    setInitialInputValue: (minValue: number) => void
    setMaxInputValue: (maxValue: number) => void
    InitialInputValue: number
    MaxInputValue: number
    setValue: (value: number) => void
}

export const SecondPage = (props: SecondPagePropsTypes) => {

    const minValueInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setInitialInputValue(Number(event.currentTarget.value))
    }

    const MaxValueInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setMaxInputValue(Number(event.currentTarget.value))
        console.log(event.currentTarget.value)
    }

    const setValueHandler = () => {
        props.setValue(props.InitialInputValue)
    }

    const inputClassName = props.InitialInputValue < 0 ? "red" : "" || props.InitialInputValue >= props.MaxInputValue ? "red" : "";

    return (
        <div className="Counter">
            <h3> Start value:</h3>
            <input className={inputClassName} onChange={minValueInputHandler} value={props.InitialInputValue}
                   type='number'/>

            <h3>Max value:</h3>
            <input onChange={MaxValueInputHandler} value={props.MaxInputValue} type='number'/>

            <NavLink to="/">{<button className="button"
                                     disabled={props.InitialInputValue < 0 || props.InitialInputValue >= props.MaxInputValue}
                                     onClick={setValueHandler}>Set</button>}</NavLink>
        </div>
    );
};

