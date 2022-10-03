import Button from './../ButtonStiled/Button';
import { useDispatch } from 'react-redux';
import { ListItemWrap, List } from './ContactListStyled';
import { deleteContact } from './../../redux/operations';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDelContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <List>
      {contacts.map(contact => {
        return (
          <ListItemWrap key={contact.id}>
            {contact.name}: {contact.phone}
            <Button onClick={() => handleDelContact(contact.id)}>Delete</Button>
          </ListItemWrap>
        );
      })}
    </List>
  );
};

export default ContactList;
