import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './contactList';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import './App.css';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  };
  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    const { contacts } = this.state;
    const normalizedName = name.trim().toLowerCase();

    const isDuplicate = contacts.some(contact => contact.name.toLowerCase() === normalizedName);

    if (isDuplicate) {
      alert(`${name} is already in the phonebook.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim()
    };
    

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
    }));
  };

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    
    const filteredContacts = this.getFilteredContacts();
    return (
      <div className="App">
        <div className="container">
        <h2>Phonebook</h2>
      <ContactForm onAddContact={this.addContact}/>

      <h2>Contacts</h2>
      <Filter filter={this.state.filter} onFilterChange={this.handleFilterChange} />
      <ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact} />
      </div>
      </div>
    );
  }
}

