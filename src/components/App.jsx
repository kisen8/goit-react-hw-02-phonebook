import React from 'react';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import { Container, TitlePhonebook, TitleContacts } from 'App.styled';
class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  // Добавление нового контакта

  addContact = newContact => {
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

  formSubmitHandler = data => {
    // console.log(data);
  };

  render() {
    const { filter } = this.state;
    const filteredResults = this.filterContacts();

    return (
      <Container>
        <TitlePhonebook>Phonebook</TitlePhonebook>
        <Form onSubmit={this.formSubmitHandler} onClick={this.addContact} />
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
