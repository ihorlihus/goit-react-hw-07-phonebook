import Button from './../ButtonStiled/Button';
import { useDispatch } from 'react-redux';
import { delContact } from '../../redux/contSlice';
import { ListItemWrap, List } from './ContactListStyled';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDelContact = id => {
    dispatch(delContact(id));
  };

  return (
    <>
      {contacts.length > 0 ? (
        <List>
          {contacts.map(contact => {
            return (
              <ListItemWrap key={contact.id}>
                {contact.name}: {contact.number}
                <Button onClick={() => handleDelContact(contact.id)}>
                  Delete
                </Button>
              </ListItemWrap>
            );
          })}
        </List>
      ) : (
        <p>No any contact! add new</p>
      )}
    </>
  );
};

export default ContactList;
