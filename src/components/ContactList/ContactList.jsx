import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import PropTypes from 'prop-types';
import { ListContacts } from './ContactList.styled';
// все контакты принимает  + метод чтобы удалять контакт
class ContactList extends React.Component {
  render() {
    const { contacts, onDeleteContact } = this.props;
    return (
      <ListContacts>
        {contacts.map(contact => (
          <ContactItem
            contact={contact}
            onDeleteContact={onDeleteContact}
            key={contact.id}
          />
        ))}
      </ListContacts>
    );
  }
}
export default ContactList;
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
