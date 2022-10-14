import React from 'react';
import Form from './Form/Form';
class App extends React.Component {
  state = {
    contacts: [],
    // name: '',
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        {/* <Filter /> */}
        {/* <ContactList /> */}
      </div>
    );
  }
}

export default App;
