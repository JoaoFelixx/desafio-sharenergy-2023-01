import { HttpRequest, HttpResponse, Client } from '../../../domain/entities';

interface UpdateClientMethod {
  editClient: (client: Client) => Promise<Error | Client>;
}

export const makePutClient = ({ editClient }: UpdateClientMethod) =>
  async (request: HttpRequest, response: HttpResponse) => {
    try {
      const client: Client = request.body;

      const result = await editClient(client);

      if (result instanceof Error)
        return response.status(400).json(result.message);

      response.status(202).json(result);

    } catch (error) {
      return new Error('Error put client');
    }
  }