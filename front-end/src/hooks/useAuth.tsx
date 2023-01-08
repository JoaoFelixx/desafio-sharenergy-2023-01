import {
  useState,
  useEffect,
  useCallback,
} from 'react';
import { api } from 'services';
import { environments } from 'constants/environments';
import { localizedStrings } from 'constants/localizedStrings';

interface TokenRequest {
  token: string;
}

interface UserProps {
  username: string;
  password: string;
}

interface AuthParams {
  authenticated: boolean;
  handleLogin: (user: UserProps) => void;
  handleLogout: () => void;
}

export default function useAuth(): AuthParams {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  const verifyAccess = useCallback((): void => {
    const result = localStorage.getItem('token_SHARENERGY');

    const token: string = JSON.parse(result+"");

    if (!token)
      return

    setAuthenticated(true);
  }, [setAuthenticated])

  async function handleLogin(data: UserProps): Promise<void | Error> {
    try {
      const {
        data: { token }
      } = await api.post<TokenRequest>(`${environments.URL_API}/auth`, data);

      localStorage.setItem('token_SHARENERGY', JSON.stringify(token));

      setAuthenticated(true);

    } catch (err) {
      return new Error(localizedStrings.ErrorLoggingInCheckYourCredentials);
    }
  }

  function handleLogout(): void {
    setAuthenticated(false);

    localStorage.removeItem('token_SHARENERGY');
  }

  useEffect(() => {
    if (authenticated && '/login' !== window.location.pathname) {
      return
    }

    verifyAccess();

  }, [verifyAccess, authenticated]);

  return { authenticated, handleLogin, handleLogout };
}