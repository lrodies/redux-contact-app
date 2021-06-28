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

const deleteContact = (telNum) => {
    return {
        type: actionTypes.DELETE,
        payload: telNum
    }
}

const contactActions = {
    createContact,
    getContacts,
    deleteContact
}

export default contactActions;