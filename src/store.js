import { createStore } from 'redux'
import contactReducer from './reducer'

const ctc1 = { fName: 'Mahatma', lName: 'Ghandi', telNum: '111-222-3333' };
const ctc2 = { fName: 'Simone', lName: 'Biles', telNum: '999-999-9999' };
// const initialState = { contacts: [ctc1] };
const initialState = { contacts: [ctc1, ctc2] };
const store = createStore(contactReducer, initialState);
export default store;
