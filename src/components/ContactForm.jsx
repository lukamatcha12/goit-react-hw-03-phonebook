import { Component } from "react";
import './ContactForm.css';

export class ContactForm extends Component {
    state = {
      name: '',
      number: ''
    };
  
    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    };
  
    handleSubmit = (event) => {
      event.preventDefault();
      this.props.onAddContact(this.state.name, this.state.number);
      this.setState({ name: '', number: '' });
    };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <label>
            <p> Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
          </label>
          <label>
          <p>Number</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
          </label>
          <button type="submit">Add Contact</button>
        </form>
      );
    }
  }