import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class Form extends React.Component {
  state = {
    name: '',
  };

  handleNameChange = event => {
    // console.log(event.currentTarget.value);
    this.setState({ name: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  contact = {
    id: uuidv4(),
    name: this.state.name,
    // console.log(this.state);
    // this.setState({})
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    console.log('props', this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="">
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </label>

        <button
          type="submit"
          onClick={() => {
            this.props.onClick({
              name: this.state.name,
              id: uuidv4(),
              number: "'234234",
            });
          }}
        >
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
