import React from 'react';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  /////////////////////////////////////////////////////////
  // Добавление нового контакта

  addContact = newContact => {
    console.log('newContact', newContact);
    // Проверяем контакты на совпадение по названию
    const duplicateName = this.state.contacts.find(
      contact => contact.name === newContact.name
    );
    // Проверяем чтобы были заполнены поля ввода
    if (newContact.name === '' || newContact.number === '') {
      alert('Sorry, you need to fill in the specified input fields');
      return;
    }

    if (duplicateName) {
      alert(`${newContact.name} is already on contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  // Следит за полем фильтрации и пишет в стейт
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  // Фильтрует и возвращает результат фильтра
  filterContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  // Удаляем контакт из списка
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  //////////////////////////////////////////////////////

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    const { filter } = this.state;
    const filteredResults = this.filterContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} onClick={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filteredResults}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
