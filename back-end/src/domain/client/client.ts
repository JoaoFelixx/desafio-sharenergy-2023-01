interface Client {
  _id: string;
  cpf: number;
  name: string;
  email: string;
  address: string;
  phone_number: number;
}

interface BuildMethods {
  makeId: () => string;
  validator(client: Client): { error?: string };
}

class ClientEntity implements Client {
  public readonly _id: string;
  public cpf: number;
  public name: string; 
  public email: string;
  public address: string;
  public phone_number: number;
  
  constructor(
    client: Partial<Client>,
    makeId: BuildMethods['makeId']
  ) {
    Object.assign(this, client)
    this._id = client._id || makeId();
  }
}

export const buildMakeClient = ({ makeId, validator }: BuildMethods) =>
  async (client: Partial<Client>): Promise<Client | Error> => {
    try {
      const createdClient = new ClientEntity(client, makeId)

      const { error } = validator(createdClient);

      if (error)
        throw new Error();

      return Object.freeze(createdClient);

    } catch (error) {
      return new Error('Error building Client');
    }
  }