import "react-toastify/dist/ReactToastify.css";
import { Routes } from 'Router';
import { IconContext } from 'react-icons';
import { ApisProvider } from 'Context/api-context';
import { AuthProvider } from 'Context/auth-context';
import { ToastContainer } from 'react-toastify';
import { iconStyleSettings } from 'styles';
import { ClientsContext } from 'Context/clients-context';
import { GlobalStyle } from 'styles';

function Application() {
  return (
    <AuthProvider>
      <ApisProvider>
        <ClientsContext>
          <IconContext.Provider value={iconStyleSettings}>
            <ToastContainer
              position="top-right"
              autoClose={4000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={true}
              rtl={false}
              pauseOnFocusLoss={false}
              draggable
              pauseOnHover />
            <GlobalStyle />
            <Routes />
          </IconContext.Provider>
        </ClientsContext>
      </ApisProvider>
    </AuthProvider>
  );
}

export default Application;