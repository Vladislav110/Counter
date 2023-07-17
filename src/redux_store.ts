import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./counter_reducer";
import thunk from "redux-thunk";
import {loadState, saveState} from "./utils/local_storage-utils";


export type AppStateType = ReturnType<typeof reducers>

let reducers = combineReducers({
    counterPage: counterReducer
});

const store = createStore(reducers, loadState(), applyMiddleware(thunk));

store.subscribe(() => {
    saveState({
        counterPage:store.getState().counterPage
    });

})

export default store

// localStorage.setItem('app-state', JSON.stringify(store.getState()))
// localStorage.setItem('value', JSON.stringify(store.getState().counterPage.count))
// localStorage.setItem('min-value', JSON.stringify(store.getState().counterPage.InitialInputValue))
// localStorage.setItem('max-value', JSON.stringify(store.getState().counterPage.MaxInputValue))
