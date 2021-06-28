import * as actionTypes from './actionTypes';
const createContact = (contact) => {
    return {
        type: actionTypes.CREATE,
        payload: contact
    }
}

const getContacts = (contacts) => {
    return {
        type: actionTypes.GET_ALL,
        payload: contacts
    }
}

export default {
    createContact,
    getContacts
}