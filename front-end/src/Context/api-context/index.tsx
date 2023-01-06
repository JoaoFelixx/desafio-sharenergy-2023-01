import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  createContext,
} from "react";
import { api } from 'services';
import { environments } from "constants/environments";
import { useSelectorAuth } from 'Context/auth-context';
import { toast } from 'react-toastify';

interface Provider {
  children: React.ReactNode
}

interface RandomUsers {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
    fullName: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: Date;
    age: number;
  };
  registered: {
    date: Date;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

interface APIResult {
  results: RandomUsers[];
  info: Info;
}

interface ContextMethods {
  users: RandomUsers[];
  setPage?: React.Dispatch<number>;
}

interface Action {
  type: 'change-random-users';
  payload: RandomUsers[];
}

const initialState: ContextMethods = {
  users: [],
};

const Context = createContext<ContextMethods>(initialState);

const reducer = (state: RandomUsers[], action: Action): RandomUsers[] => ({
  'change-random-users': [...action.payload],
}[action.type])

export const useSelectorApi = (): ContextMethods => useContext(Context);

export const ApisProvider = ({ children }: Provider) => {

  const [page, setPage] = useState<number>(0);
  const { authenticated } = useSelectorAuth();
  const [state, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    (async () => {
      try {
        if (!authenticated)
          return

        const {
          data, status
        } = await api.get<APIResult>(`${environments.URL_RANDOM_USER}/?page=${page}&results=18`);

        if (status !== 200)
          throw new Error();

        const users = data.results.map(user => {
          user.name.first[0].toUpperCase();
          user.name.last[0].toUpperCase();

          user.name.fullName = `${user.name.first} ${user.name.last}`

          return user
        })

        dispatch({
          type: 'change-random-users',
          payload: users
        });

      } catch (error) {
        toast.error('Erro ao tentar puxar dados');
      }
    })()
  }, [authenticated, page])

  return (
    <Context.Provider value={{ users: state, setPage }}>
      {children}
    </Context.Provider>
  )
}