import { User } from '../../domain/entities';

interface OrmMethods {
  getByUsername: (user: Pick<User, 'username'>) => Promise<User | null>
}

interface MethodsForAuth {
  db: OrmMethods;
  compare(password: string, hash: string): Promise<boolean>
}

export const makeAuthUser = ({ db, compare }: MethodsForAuth) =>
  async ({ username, password }: Pick<User, 'username' | 'password'>): Promise<User | Error> => {

    const result = await db.getByUsername({ username });

    if (!result)
      return new Error('Email not registered');

    const isCorrectPassword = await compare(password, result.password);

    return isCorrectPassword ? result : new Error('Email or password incorrect');
  }