import { addReducer, ADD_KEY } from "./addRedux/addReducer";
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    [ADD_KEY]: addReducer
})

export {rootReducer}