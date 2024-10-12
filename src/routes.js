import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

export default [
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
];
