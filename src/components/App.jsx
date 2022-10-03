import { useSelector, useDispatch } from 'react-redux';
import { addFilterValue } from '../redux/filterSlice';
import ContactList from './ContactList';
import SignUpForm from './ContactForm';
import Filter from './Filter';
import { getContacts, getIsLoading, getError } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from './../redux/operations';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filterState = useSelector(state => state).filter.value;
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
      <h2>Contacts {isLoading && !error && <b>Request in progress...</b>}</h2>
      <Filter onChange={changeFilter} />
      {error && <p>{error}</p>}
      {contacts.length > 0 ? (
        <ContactList contacts={getFiltredContakts()} />
      ) : (
        <p>No any contact! add new</p>
      )}
    </div>
  );
};
