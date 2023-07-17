import React from 'react';
import {NavLink} from "react-router-dom";

type FirstPagePropsTypes = {
    setInitialInputValue: (InitialInputValue:number) => void
    count: number
    MaxInputValue: number
    InitialInputValue: number
    counter: () => void
    Reset: () => void

}

export const FirstPage = (props: FirstPagePropsTypes) => {

    const setValueHandler = () => {
        props.setInitialInputValue(props.InitialInputValue)
    }

    const classNameColor = props.count === props.MaxInputValue ? "red" : "";
    const CountError = props.InitialInputValue < 0 ? "Incorrect value" : props.count;

    return (
        <div className="Counter">
            <div><h1>Counter</h1></div>
            <div><h1 className={classNameColor}> {CountError}</h1></div>
            <div className="Buttons">
                <button className="button" disabled={props.count >= props.MaxInputValue || props.count < 0}
                        onClick={props.counter}>Inc
                </button>
                <button className="button" onClick={props.Reset}>Reset</button>
                <NavLink to="/SP">{<button className="button" disabled={props.InitialInputValue < 0}
                                           onClick={setValueHandler}>Set</button>}</NavLink>
            </div>
        </div>

    );
}
