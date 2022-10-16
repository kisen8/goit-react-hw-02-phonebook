import React from 'react';
import Form from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import { Container, TitlePhonebook, TitleContacts } from 'App.styled';
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

  // Добавление нового контакта

  addContact = newContact => {
    // Проверяем контакты на совпадение по названию
    const duplicateName = this.state.contacts.find(
      contact => contact.name === newContact.name
    );
    // Проверяем чтобы были правильно заполнены поля ввода

    if (duplicateName) {
      alert(`${newContact.name} is already on contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  // для того чтобы следить за полем фильтрации и писать в ---> state
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  // Фильтр, возвращает результат фильтра
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

  render() {
    const { filter } = this.state;
    const filteredResults = this.filterContacts();

    return (
      <Container>
        <TitlePhonebook>Phonebook</TitlePhonebook>
        <Form onSubmit={this.addContact} />
        <TitleContacts>Contacts</TitleContacts>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filteredResults}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
