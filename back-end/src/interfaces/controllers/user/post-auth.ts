import { User, HttpRequest, HttpResponse } from '../../../domain/entities';

interface JWT {
  secret: string | Buffer;
  payload: object | string | Buffer
  signOptions: { expiresIn?: string; }
}

interface AuthUserMethod {
  authUser: (user: Pick<User, 'username' | 'password'>) => Promise<User | Error | null>;
  sign: ({ }: JWT['payload'], key: JWT['secret'], { }: JWT['signOptions']) => string;
}

export const makePostAuth = ({ authUser, sign }: AuthUserMethod) =>
  async (request: HttpRequest, response: HttpResponse) => {
    try {
      const { username, password }: User = request.body;

      const result = await authUser({ username, password });

      if (!result)
        return response.status(400).json('Username does not registered');

      if (result instanceof Error)
        return response.status(400).json(result.message);
      
      const token = await sign({
        _id: result._id
      }, process.env.SECRET_KEY_JWT || '', {});

      return response.status(201).json({ status: 201, token });

    } catch (error) {
      return response.sendStatus(401);
    }
  }