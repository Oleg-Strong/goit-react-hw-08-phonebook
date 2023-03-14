import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/operation';
import { useState } from 'react';
import MainModal from 'components/MainModal/MainModal';
import UpdateContactForm from 'components/UpdateContactForm';
import { Box, IconButton, Paper, Tooltip, Typography } from '@mui/material';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';

import { theme } from 'theme/theme';

const ContactItem = ({ contact }) => {
  const { id, name, number } = contact;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(prevIsModalOpen => !prevIsModalOpen);
  };
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(id));
  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: ' space-between',
        alignItems: 'center',
        padding: '10px',
        width: '100%',
        borderRadius: '10px',
        backgroundColor: `${theme.palette.background.basic}`,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { sm: '20px' },
        }}
      >
        <Typography
          variant="subtitle2"
          color={theme.palette.primary.second}
          sx={{
            fontSize: { xs: '20px', md: '30px', xl: '35px' },
          }}
        >
          {name}:
        </Typography>
        <Tooltip title="Call">
          <a href={`tel:+${number}`}>
            <Typography
              variant="subtitle2"
              color={theme.palette.primary.third}
              sx={{
                fontSize: { xs: '20px', md: '30px', xl: '35px' },
              }}
            >
              {number}
            </Typography>
          </a>
        </Tooltip>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: '5px',
        }}
      >
        <Tooltip title="Delete">
          <IconButton onClick={onDelete}>
            <RestoreFromTrashIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Edit">
          <IconButton onClick={toggleModal}>
            <ModeEditOutlineIcon />
          </IconButton>
        </Tooltip>
      </Box>

      {isModalOpen && (
        <MainModal closeModal={toggleModal}>
          <UpdateContactForm closeModal={toggleModal} contactValues={contact} />
        </MainModal>
      )}
    </Paper>
  );
};
export default ContactItem;

ContactItem.prototype = {
  phonebook: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
