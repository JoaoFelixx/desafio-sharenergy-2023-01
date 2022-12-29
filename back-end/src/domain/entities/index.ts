export interface User {
  _id: string;
  username: string;
  password: string; 
}

export interface Client {
  _id: string;
  cpf: number;
  name: string;
  email: string;
  address: string;
  phone_number: number;
}

export interface HttpResponse {
  json: (data: any) => void;
  status: (status: number) => Pick<HttpResponse, 'json'>;
  sendStatus: (status: number) => void;
}

export interface HttpRequest {
  ip: string;
  body: any;
  params: any;
  headers: {
    'user-agent'?: string;
    referer?: string;
    authorization?: string;
  },
}

export type HttpNextFunction = () => void; 