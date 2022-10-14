import React from 'react';

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
    // console.log(this.state);
    // this.setState({})
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
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

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
