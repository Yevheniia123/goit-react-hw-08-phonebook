import React from 'react';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import phonebookOperation from '../../redux/phonebook/phonebook-operation';
import phonebookSelectors from '../../redux/phonebook/phonebook-selectors';

const ContactList = ({ filterName, deleteId }) => (
  <ul>
    {filterName.map(item => (
      <li key={item.id}>
        <span>
          {item.name} : {item.number}
        </span>

        <button
          type="button"
          className={s.deleteitem}
          onClick={() => {
            deleteId(item.id);
          }}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);
ContactList.propTypes = {
  filterName: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  deleteId: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filterName: phonebookSelectors.getVisibleContact(state),
});

const mapDispachToProps = dispatch => ({
  deleteId: id => dispatch(phonebookOperation.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispachToProps)(ContactList);
