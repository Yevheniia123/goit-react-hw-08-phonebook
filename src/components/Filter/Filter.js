import React from 'react';
import s from './Filter.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import phonebookAction from '../../redux/phonebook/phonebook-action';
import phonebookSelectors from '../../redux/phonebook/phonebook-selectors';

const Filter = ({ value, onChange }) => (
  <label className={s.filter}>
    Find contacts by name
    <input
      type="text"
      className={s.inputFilter}
      value={value}
      onChange={onChange}
    />
  </label>
);
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: phonebookSelectors.getFilter(state),
});

const mapDispachToProps = dispatch => ({
  onChange: e => dispatch(phonebookAction.filterContact(e.target.value)),
});

export default connect(mapStateToProps, mapDispachToProps)(Filter);
