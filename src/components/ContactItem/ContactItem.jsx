import React from 'react';

class ContactItem extends React.Component {
  render() {
    const { contact, onDeleteContact } = this.props;
    return (
      <li>
        <span>{contact.name}: </span>
        <a href={`tel:${contact.number}`}>{contact.number}</a>
        <button
          type="button"
          onClick={() => onDeleteContact(contact.id)} // Метод на клике, принимает ID контакта
        >
          Delete
        </button>
      </li>
    );
  }
}

export default ContactItem;
