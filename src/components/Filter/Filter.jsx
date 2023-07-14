import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/filterSlice';
import { useContacts } from 'hooks/useContacts';
import { Box, TextField, Typography } from '@mui/material';
import { theme } from 'theme/theme';

const Filter = () => {
  const dispatch = useDispatch();
  const { filter: name } = useContacts();
  const onchange = event => {
    const { value } = event.target;
    dispatch(changeFilter(value));
  };
  return (
    <Box
      p={2}
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <Typography variant="h2" color={theme.palette.primary.second}>
        Find contacts by name
      </Typography>
      <TextField
        id="filled-basic"
        label="Name"
        variant="filled"
        type="text"
        name="name"
        value={name}
        onChange={onchange}
        margin="normal"
        size="small"
      />
    </Box>
  );
};

export default Filter;
