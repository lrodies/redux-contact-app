import * as actionTypes from './actionTypes';
const initialState = {
    contacts: []
}

export default function contactReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case actionTypes.CREATE: {
            return {
                ...state,
                contacts: [
                    ...state.contacts,
                    // {
                    //     fName: action.payload.fName,
                    //     lName: action.payload.lName,
                    //     telNum: action.payload.telNum,
                    // }
                    action.payload
                ]
            }
        }
        case actionTypes.GET_ALL: {
            return {
                ...state,
                contacts: [
                    ...state.contacts,
                ]
            }
        }
        default:
            return state
    }
}