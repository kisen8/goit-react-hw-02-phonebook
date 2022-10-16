import React from 'react';
import {
  ItemContacts,
  ContactName,
  ContactNumber,
  BtnDelete,
  Delete,
} from './ContactItem.styled';
class ContactItem extends React.Component {
  render() {
    const { contact, onDeleteContact } = this.props;
    return (
      <ItemContacts>
        <ContactName>{contact.name}: </ContactName>
        <ContactNumber href={`tel:${contact.number}`}>
          {contact.number}
        </ContactNumber>
        <BtnDelete
          type="button"
          onClick={() => onDeleteContact(contact.id)} // Метод на клике, принимает ID контакта
        >
          <Delete>Delete</Delete>
        </BtnDelete>
      </ItemContacts>
    );
  }
}

export default ContactItem;
