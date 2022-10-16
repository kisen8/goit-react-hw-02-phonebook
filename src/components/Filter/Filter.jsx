import React from 'react';
import PropTypes from 'prop-types';
import { FilterWrap, Label, Input } from './Filter.styled';
class Filter extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <FilterWrap>
        <Label>
          Find contacts by name
          <Input
            type="text"
            name="filter"
            value={value}
            onChange={onChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </Label>
      </FilterWrap>
    );
  }
}

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
