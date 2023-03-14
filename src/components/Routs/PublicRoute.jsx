import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

const PublicRoute = ({ component }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to="/" /> : component;
};
export default PublicRoute;
