import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

const PrivateRoute = ({ component }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? component : <Navigate to="/" />;
};

export default PrivateRoute;
