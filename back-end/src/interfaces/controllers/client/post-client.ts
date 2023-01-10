import { HttpRequest, HttpResponse, Client } from '../../../domain/entities';

interface CreateClientMethod {
  addClient: (client: Client) => Promise<Error | Client>;
}

export const makePostClient = ({ addClient }: CreateClientMethod) =>
  async (request: HttpRequest, response: HttpResponse) => {
    try {
      const client: Client = request.body;

      const result = await addClient(client);

      if (result instanceof Error)
        return response.status(400).json(result.message);

      const {
        _id, address, cpf, email, name, phone_number
      } = result;

      response.status(201).json({ _id, address, cpf, email, name, phone_number });

    } catch (error) {
      return new Error('Error post client');
    }
  }