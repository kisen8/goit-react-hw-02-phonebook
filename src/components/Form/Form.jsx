import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import contactImg from 'contacts.png';
import {
  Forma,
  ImgWrap,
  Images,
  LableWrap,
  Label,
  Input,
  Btn,
  BtnText,
} from './Form.styled';
class Form extends React.Component {
  state = {
    name: '',
    number: '',
  };
  //----- методы:-------

  handleNumberChange = event => {
    this.setState({
      number: event.currentTarget.value,
    });
  };
  handleNameChange = event => {
    this.setState({
      name: event.currentTarget.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  contact = {
    id: uuidv4(),
    name: this.state.name,
    number: this.state.number,
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Forma onSubmit={this.handleSubmit}>
        <ImgWrap>
          <Images src={contactImg} alt="phone"></Images>
        </ImgWrap>
        <LableWrap>
          <Label htmlFor="">
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </Label>
          <Label htmlFor="">
            Number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleNumberChange}
            />
          </Label>

          <Btn
            type="submit"
            onClick={() => {
              this.props.onClick({
                name: this.state.name,
                id: uuidv4(),
                number: this.state.number,
              });
            }}
          >
            <BtnText>Add contact</BtnText>
          </Btn>
        </LableWrap>
      </Forma>
    );
  }
}

export default Form;
