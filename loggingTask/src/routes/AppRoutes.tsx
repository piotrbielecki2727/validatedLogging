import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import UsersPage from '../pages/UsersPage';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import { PageRoutes } from './routes';

const AppRoutes = () => {
  const { LOGIN_PAGE, USERS_PAGE } = PageRoutes;

  return (
    <Routes>
      <Route path={LOGIN_PAGE} element={<LoginPage />} />
      <Route
        path={USERS_PAGE}
        element={
          <ProtectedRoute>
            <UsersPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
