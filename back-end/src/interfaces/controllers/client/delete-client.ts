import { HttpRequest, HttpResponse, Client } from '../../../domain/entities';

interface RemoveClientMethod {
  removeClient: ({ _id }: Pick<Client, '_id'>) => Promise<Error | void>;
}

export const makeDeleteClient = ({ removeClient }: RemoveClientMethod) =>
  async (request: HttpRequest, response: HttpResponse) => {
    try {
      const { _id }: Pick<Client, '_id'> = request.params;

      const result = await removeClient({ _id });

      if (result instanceof Error)
        return response.status(400).json(result.message);

      response.json(result);

    } catch (error) {
      return new Error('Error removing client');
    }
  }