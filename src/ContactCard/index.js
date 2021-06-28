import React from 'react';
import '../index.css';
import { useDispatch } from 'react-redux';
import contactActions from '../contactActions';

const ContactCard = (props) => {
    const dispatch = useDispatch();
    const deleteContact = () => {
        dispatch(contactActions.deleteContact(props.contact.telNum));
    }

    return (<div className='card'>

        <div className="cardInfoDiv">
            <span>{props.contact.lName}, {props.contact.fName}</span>
            <span className='tel'>{props.contact.telNum}</span>
        </div>
        <div className="btnDiv"><button onClick={deleteContact}>Delete</button></div>

    </div>);
};
export default ContactCard;