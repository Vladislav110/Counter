const SETCOUNT = "SETCOUNT";
const RESETCOUNT = "RESETCOUNT";
const SETINITIALINPUTVALUE = "SETINITIALINPUTVALUE"
const SETMAXINPUTVALUE = "SETMAXINPUTVALUE"
const SETVALUE = "SETVALUE"

type ActionsType =
    ReturnType<typeof setCountActionCreator>
    | ReturnType<typeof resetCountActionCreator>
    | ReturnType<typeof setInitialInputValueActionCreator>
    | ReturnType<typeof setMaxInputValueActionCreator>
    | ReturnType<typeof setValueActionCreator>


export type InitialStateType = typeof initialState

let initialState = {
    count: 0,
    InitialInputValue: 0,
    MaxInputValue: 5
}

export const counterReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SETCOUNT:
            return {...state, count: (state.count < state.MaxInputValue) ? ++state.count : state.InitialInputValue}
        case RESETCOUNT:
            return {...state, count: state.InitialInputValue}
        case SETINITIALINPUTVALUE:
            return {...state, InitialInputValue: action.initialValue}
        case SETMAXINPUTVALUE:
            return {...state, MaxInputValue: action.maxValue}
        case SETVALUE:
            return {...state, count: action.initialValue}
        default:
            return state
    }
}

export const setCountActionCreator = () => {
    return {
        type: SETCOUNT
    } as const
}

export const resetCountActionCreator = () => {
    return {
        type: RESETCOUNT
    } as const
}

export const setInitialInputValueActionCreator = (initialValue: number) => {
    return {
        type: SETINITIALINPUTVALUE,
        initialValue: initialValue
    } as const
}

export const setMaxInputValueActionCreator = (maxValue: number) => {
    return {
        type: SETMAXINPUTVALUE,
        maxValue: maxValue
    } as const
}

export const setValueActionCreator = (initialValue: number) => {
    return {
        type: SETVALUE,
        initialValue: initialValue
    } as const
}


