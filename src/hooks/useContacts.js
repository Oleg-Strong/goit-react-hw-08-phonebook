import { useSelector } from 'react-redux';
import {
  selectFilter,
  selectContacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';

export const useContacts = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return {
    filter,
    contacts,
    isLoading,
    error,
  };
};
