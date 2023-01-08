import {
  useEffect,
  useReducer,
  useContext,
  createContext,
} from 'react';
import { api } from 'services';
import { environments } from 'constants/environments';

interface Provider {
  children: React.ReactNode
}

interface Client {
  _id: string;
  cpf: number;
  name: string;
  email: string;
  address: string;
  phone_number: number;
}

interface Action {
  type: 'add-client' | 'del-client' | 'edit-client';
  payload: Client | Client[];
}

interface ContextData {
  clients: Client[];
  dispatch?: React.Dispatch<Action>;
}

const Context = createContext<ContextData>({ clients: [] });

const useSelectorClients = (): ContextData => useContext(Context);

const reducer = (state: Client[], action: Action) => ({
  'add-client': (() => {
    if (Array.isArray(action.payload))
      return [...action.payload];

    return [...state, action.payload]
  })(),
  'del-client': state.filter(({ _id }) => {
    if (Array.isArray(action.payload))
      return true;

    return _id !== action.payload._id
  }),
  'edit-client': state.map((client) => {
    if (Array.isArray(action.payload))
      return client;

    if (client._id !== action.payload._id)
      return client;

    return Object.assign(client, action.payload);
  })
}[action.type])

const ClientsContext = ({ children }: Provider) => {
  const [state, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem('token_SHARENERGY') || '';

        const { data } = await api
          .get<Client[]>(`${environments.URL_API}/clients`, {
            headers: {
              'Authorization': `Bearer ${JSON.parse(token)}`
            }
          });

        dispatch({ type: 'add-client', payload: data });

      } catch (error) {
        return
      }
    })()
  }, [])

  return (
    <Context.Provider value={{ clients: state, dispatch }}>
      {children}
    </Context.Provider>
  )
}

export { useSelectorClients, ClientsContext }