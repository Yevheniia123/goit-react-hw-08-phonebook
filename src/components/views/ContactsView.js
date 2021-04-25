import React, { Component } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactsList/ContactList';
import { connect } from 'react-redux';
import phonebookOperations from '../../redux/phonebook/phonebook-operation';

class ContactsView extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }
  render() {
    return (
      <>
        <SectionTitle title="Phonebook">
          <ContactForm />
        </SectionTitle>
        <SectionTitle title="Contacts">
          <Filter />
          <ContactList />
        </SectionTitle>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(phonebookOperations.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(ContactsView);

// {
//   /* {this.props.isLoadingContact && <h2>...LOADING</h2>}

// }
