import { FETCH_ANS, SEND_NUMBERS_TO_STORE } from "./add.actionTypes";

export const ADD_KEY = 'addStore'

const initialState = {
    num1: '',
    num2: '',
    ans: ''
}

const addReducer = (state = initialState, action) =>{
    const {type, payload} = action
    switch(type){
        case SEND_NUMBERS_TO_STORE:
            return{
                ...state,
                ...payload
            }
        
        case FETCH_ANS:
            return{
                ...state,
                ...payload,
                ans: parseFloat((+state.num1) + (+state.num2)).toFixed(1)
            }

        default: return state
    }
}

export {addReducer}