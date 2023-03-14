import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const Natification = ({ title }) => {
  return title ? (
    <Typography variant="h3">
      Contact with the name
      <Typography variant="subtitle3"> "{title}" </Typography>not found.
    </Typography>
  ) : (
    <Typography variant="h3">
      There are no contacts in the phone book yet!
    </Typography>
  );
};
export default Natification;

Natification.prototype = {
  title: PropTypes.string.isRequired,
};
