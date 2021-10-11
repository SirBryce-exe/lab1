//Dito naman sa add actions, eto naman ung literal na action na gagawin ng action types mo.
//Parang literal na courier na gagawin lang din nila ung trabaho nila,
//If i dedeliver ba sa warehouse or i do door-to-door. 

import { FETCH_ANS, SEND_NUMBERS_TO_STORE } from "./add.actionTypes";

const sendNumbersToStore = (number) =>{
    return{
        type: SEND_NUMBERS_TO_STORE,
        payload: number
    }
}

const fetchAns = (number) =>{
    return{
        type: FETCH_ANS,
        payload: number
    }
}

export {sendNumbersToStore, fetchAns}