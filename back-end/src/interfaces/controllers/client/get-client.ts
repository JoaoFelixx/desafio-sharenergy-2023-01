import { HttpRequest, HttpResponse, Client } from '../../../domain/entities';

interface GetClientMethod {
  findClient: () => Promise<Error | Client[]>;
}

export const makeGetClient = ({ findClient }: GetClientMethod) =>
  async (request: HttpRequest, response: HttpResponse) => {
    try {
      const result = await findClient();

      if (result instanceof Error)
        return response.status(400).json(result.message);

      response.json(result);

    } catch (error) {
      return new Error('Error find clients');
    }
  }