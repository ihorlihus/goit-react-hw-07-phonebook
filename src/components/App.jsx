import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFilterValue } from 'redux/filterSlice';
import { fetchContacts } from 'redux/operations';
import {
  selectIsLoading,
  selectError,
  selectFiltredContakts,
} from 'redux/selectors';
import ContactList from './ContactList';
import SignUpForm from './ContactForm';
import Filter from './Filter';

export const App = () => {
  const dispatch = useDispatch();
  const filtredContacts = useSelector(selectFiltredContakts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const changeFilter = event => {
    dispatch(addFilterValue(event.currentTarget.value.toLowerCase().trim()));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <SignUpForm />
      <h2>Contacts {isLoading && !error && <b>Request in progress...</b>}</h2>
      <Filter onChange={changeFilter} />
      {error && <p>{error}</p>}
      {filtredContacts.length > 0 ? (
        <ContactList contacts={filtredContacts} />
      ) : (
        <p>No any contact! add new</p>
      )}
    </div>
  );
};
