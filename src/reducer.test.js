import contactReducer from './reducer';
import * as actionTypes from './actionTypes';
import expect from 'expect';

const testContact = { fName: 'Rumpel', lName: 'Stiltskein', telNum: '123-456-7890' };
const testContact2 = { fName: 'James', lName: 'Bond', telNum: '098-765-4321' };
const mockInitialState = { contacts: [testContact] };
const mockFinalState = { contacts: [testContact, testContact2] };
const mockCreateAction = { type: actionTypes.CREATE, payload: testContact2 };
const mockDeleteAction = { type: actionTypes.DELETE, payload: '098-765-4321' };
const mockGetAllAction = { type: actionTypes.GET_ALL };

describe('contactReducer', () => {
    it('should return contacts currently in state', () => {
        expect(contactReducer(mockInitialState, mockGetAllAction)).toEqual(mockInitialState);
    });
    it('should add a Contact to contacts currently in state', () => {
        expect(contactReducer(mockInitialState, mockCreateAction)).toEqual(mockFinalState);
    });
    it('should delete a Contact from contacts currently in state', () => {
        expect(contactReducer(mockFinalState, mockDeleteAction)).toEqual(mockInitialState);
    });
});