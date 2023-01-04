import useAuth from 'hooks/useAuth';
import React, {
  useContext,
  createContext,
} from 'react';

interface Provider {
  children: React.ReactNode;
}

interface User {
  username: string;
  password: string;
}

interface AuthParams {
  authenticated: boolean;
  handleLogin: (user: User) => void;
  handleLogout: () => void;
}

const initialValues: AuthParams = {
  authenticated: false,
  handleLogin: (user: User) => { return },
  handleLogout: () => { return }
}

const Context = createContext<AuthParams>(initialValues);

const useSelectorAuth = (): AuthParams => useContext(Context);

const AuthProvider = ({ children }: Provider) => {
  const { authenticated, handleLogin, handleLogout } = useAuth();

  return (
    <Context.Provider value={{ authenticated, handleLogin, handleLogout }}>
      {children}
    </Context.Provider>
  )
}

export { useSelectorAuth, AuthProvider };