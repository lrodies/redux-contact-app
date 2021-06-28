import React from 'react';
import '../index.css';

const ContactCard = (props) => {
    return (<div className='card'>
        <div className='leftBox'>{props.contact.lName}, {props.contact.fName}</div>
        <div className='leftBox tel'>{props.contact.telNum}</div>
    </div>);
};
export default ContactCard;