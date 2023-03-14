import { useAuth } from 'hooks';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operation';
import Layout from './Layout';
import Loader from './Loader';
import NavRoute from './Routs/NavRoute';
import PrivateRoute from './Routs/PrivateRoute';
import PublicRoute from './Routs/PublicRoute';

const Register = lazy(() => import('../pages/Register'));
const LogIn = lazy(() => import('../pages/LogIn'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<NavRoute />} />
        <Route
          path="/contacts"
          element={<PrivateRoute component={<Contacts />} />}
        />
        <Route
          path="/register"
          element={<PublicRoute component={<Register />} />}
        />

        <Route path="/login" element={<PublicRoute component={<LogIn />} />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
