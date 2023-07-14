import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import bgImg from '../images/bg-images/bg-contacts.jpg';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operation';
import Loader from 'components/Loader';

import { useContacts } from 'hooks/useContacts';
import { useAuth } from 'hooks';
import { Box, Container, Paper, Typography } from '@mui/material';
import { theme } from 'theme/theme';

const Contacts = () => {
  const dispatch = useDispatch();
  const { isLoading } = useContacts();
  const { user } = useAuth();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Paper
      sx={{
        height: '100vh',
        overflow: 'hidden',
        overflowY: 'scroll',
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container>
        <Box
          sx={{
            pt: '70px',
            pb: '20px',
            height: 'auto',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography
            variant="h2"
            color={theme.palette.primary.second}
            sx={{
              fontSize: { xs: '20px', md: '30px', xl: '35px' },
            }}
          >
            {`${user.name}, welcome to your phone book!`}
          </Typography>
          <ContactForm />
          <Filter />
          {isLoading ? <Loader /> : <ContactList />}
        </Box>
      </Container>
    </Paper>
  );
};

export default Contacts;
