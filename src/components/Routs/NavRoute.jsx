import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

const NavRoute = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to="/contacts" /> : <Navigate to="/register" />;
};

export default NavRoute;
