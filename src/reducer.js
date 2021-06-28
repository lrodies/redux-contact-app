import * as actionTypes from './actionTypes';
// const initialState = {
//     contacts: []
// }
const initialState = {}

export default function contactReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case actionTypes.CREATE: {
            return {
                ...state,
                contacts: [
                    ...state.contacts,
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
        case actionTypes.DELETE: {
            const contactsCopy = [...state.contacts];
            for (let i = 0; i < contactsCopy.length; i++) {
                if (contactsCopy[i].telNum === action.payload) {
                    contactsCopy.splice(i, 1);
                    break;
                }
            }
            return {
                contacts: contactsCopy
            }
        }
        default:
            return state
    }
}