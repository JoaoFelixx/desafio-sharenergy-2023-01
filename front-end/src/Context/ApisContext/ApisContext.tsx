import React, {
  useEffect,
  useContext,
  useReducer,
  createContext,
  useState,
} from "react";
import { api } from 'services';
import { environments } from "constants/environments";
import { useSelectorAuth } from 'Context/AuthContext';

interface Provider {
  children: React.ReactNode
}

interface BuildMethods {
  toast: {
    error: (message: string) => void;
    warning: (message: string) => void;
    success: (message: string) => void;
  }
}


interface RandomUsers {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
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
  payload: Partial<Omit<RandomUsers[], 'dispatch'>>;
}

const initialState: ContextMethods = {
  users: [],
};

const Context = createContext<ContextMethods>(initialState);

const reducer = (state: RandomUsers[], action: Action) => ({
  'change-random-users': structuredClone({ ...state, ...action.payload }),
}[action.type])

const useSelectorApi = (): ContextMethods => useContext(Context);

const buildApisProvider = ({ toast }: BuildMethods) =>
  ({ children }: Provider) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [page, setPage] = useState<number>(1);
    const { authenticated } = useSelectorAuth();

    useEffect(() => {
      (async () => {
        try {
          if (!authenticated)
            return

          const {
            data, status
          } = await api.get<APIResult>(`${environments.URL_RANDOM_USER}/?results=18`);

          if (status !== 200)
            throw new Error();

          dispatch({
            type: 'change-random-users',
            payload: data.results
          });
        } catch (error) {
          toast.error('Erro ao tentar puxar dados');
        }
      })()
    }, [])

    return (
      <Context.Provider value={{ users: state, setPage }}>
        {children}
      </Context.Provider>
    )
  }

export { buildApisProvider, useSelectorApi };