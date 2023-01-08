import {
  Route,
  Routes,
  Navigate,
  BrowserRouter
} from 'react-router-dom';
import {
  HomePage,
  LoginPage,
  ClientsPage,
  StatusCatPage,
  RandomDogPage,
} from 'pages';
import { useSelectorAuth } from 'Context/auth-context';

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
    '/clients': <ClientsPage />,
    '/status-cat': (isPrivate && authenticated) ? <StatusCatPage /> : goLogin(),
    '/random-dog': (isPrivate && authenticated) ? <RandomDogPage /> : goLogin(),
  }[path] || goLogin())

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomRoutes path="/" isPrivate />} />
        <Route path="/login" element={<CustomRoutes path="/login" />} />
        <Route path="/status-cat" element={<CustomRoutes path="/status-cat" isPrivate />} />
        <Route path="/status-cat/:id" element={<CustomRoutes path="/status-cat" isPrivate />} />
        <Route path="/random-dog" element={<CustomRoutes path="/random-dog" isPrivate />} />
        <Route path="/clients" element={<CustomRoutes path="/clients" isPrivate />} />
      </Routes>
    </BrowserRouter>
  )
}

export { Router as Routes }