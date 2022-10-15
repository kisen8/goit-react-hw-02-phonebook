import React from 'react';
import ContactItem from '../ContactItem/ContactItem';

// Принимает все контакты и пробрасывает дальше метод для удаления контакта
class ContactList extends React.Component {
  render() {
    const { contacts, onDeleteContact } = this.props;
    return (
      <ul>
        {contacts.map(contact => (
          <ContactItem
            contact={contact}
            onDeleteContact={onDeleteContact}
            key={contact.id}
          />
        ))}
      </ul>
    );
  }
}
export default ContactList;
// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }),
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };
