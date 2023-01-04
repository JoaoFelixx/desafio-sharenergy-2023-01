import { ApisProvider } from 'Context/ApisContext';
import { AuthProvider } from 'Context/AuthContext';
import { Routes } from 'Router';

function Application() {
  return (
    <AuthProvider>
      <ApisProvider>
        <Routes />
      </ApisProvider>
    </AuthProvider>
  );
}

export default Application;