import Natification from 'components/Natification';
import ContactItem from 'components/ContectItem';

import { getFilteredContacts } from 'utils/utils';
import { useContacts } from 'hooks/useContacts';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { List, ListItem } from '@mui/material';

const ContactList = () => {
  const { contacts } = useContacts();
  const { filter: name } = useContacts();
  const filteredContacts = getFilteredContacts(name, contacts);

  return filteredContacts.length === 0 ? (
    <Natification title={name}></Natification>
  ) : (
    <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={250}>
      <List
        sx={{
          flexDirection: 'column',
        }}
      >
        {filteredContacts.map(contact => (
          <ListItem key={contact.id}>
            <ContactItem contact={contact} />
          </ListItem>
        ))}
      </List>
    </Scrollbars>
  );
};
export default ContactList;
