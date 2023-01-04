import {
  Route,
  Routes,
  Navigate,
  BrowserRouter
} from 'react-router-dom';
import {
  HomePage,
  LoginPage,
  StatusCatPage,
  RandomDogPage,
  RandomUserPage,
} from 'pages';
import { useSelectorAuth } from 'Context/AuthContext';

interface PrivateRouteProps {
  path: string;
  isPrivate?: boolean;
}

const Router = () => {
  const { authenticated } = useSelectorAuth();

  const goLogin = () => <Navigate to='/login' />;

  const CustomRoutes = ({ path, isPrivate }: PrivateRouteProps) => ({
    '/': (isPrivate && authenticated) ? <HomePage /> : goLogin(),
    '/login': <LoginPage />,
    '/status-cat': (isPrivate && authenticated) ? <StatusCatPage /> : goLogin(),
    '/random-dog': (isPrivate && authenticated) ? <RandomDogPage /> : goLogin(),
    '/random-users': (isPrivate && authenticated) ? <RandomUserPage /> : goLogin(),
  }[path] || goLogin())

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomRoutes path="/" isPrivate />} />
        <Route path="/login" element={<CustomRoutes path="/login" />} />
        <Route path="/status-cat" element={<CustomRoutes path="/status-cat" isPrivate />} />
        <Route path="/random-dog" element={<CustomRoutes path="/random-dog" isPrivate />} />
        <Route path="/random-users" element={<CustomRoutes path="/random-users" isPrivate />} />
      </Routes>
    </BrowserRouter>
  )
}

export { Router as Routes }