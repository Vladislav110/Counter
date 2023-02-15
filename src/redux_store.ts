import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter_reducer";


let reducers = combineReducers({
    counterPage: counterReducer
});

export type AppStateType = ReturnType<typeof reducers>

const store = createStore(reducers);

export default store
