import { useSelector, useDispatch } from 'react-redux';
import { addFilterValue } from '../redux/filterSlice';
import ContactList from './ContactList';
import SignUpForm from './ContactForm';
import Filter from './Filter';
import { getContacts } from 'redux/contSlice';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filterState = useSelector(state => state).filter.value;
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(addFilterValue(event.currentTarget.value.toLowerCase().trim()));
  };

  const getFiltredContakts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterState)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <SignUpForm />
      <h2>Contacts</h2>
      <Filter onChange={changeFilter} />
      <ContactList contacts={getFiltredContakts()} />
    </div>
  );
};
