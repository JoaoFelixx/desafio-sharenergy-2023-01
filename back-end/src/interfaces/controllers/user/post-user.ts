import { HttpRequest, HttpResponse, User } from '../../../domain/entities';

interface CreateUserMethod {
  addUser: (user: User) => Promise<Error | User>;
}

export const makePostUser = ({ addUser }: CreateUserMethod) =>
  async (request: HttpRequest, response: HttpResponse) => {
    try {
      const user: User = request.body;

      const result = await addUser(user);

      if (result instanceof Error)
        return response.status(400).json(result.message);

      response.status(201).json(result);

    } catch (error) {
      return new Error('Error post user');
    }
  }