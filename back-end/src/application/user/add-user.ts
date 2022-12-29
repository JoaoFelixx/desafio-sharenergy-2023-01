import { User } from '../../domain/entities';

interface OrmMethods {
  insert: (user: User) => Promise<User | Error>
}

interface BuildMethods {
  db: OrmMethods;
  makeUser: (user: Partial<User>) => Promise<User | Error>;
}

export const makeAddUser = ({ db, makeUser }: BuildMethods) =>
  async ({ username, password }: Omit<User, '_id'>) => {
    const user = await makeUser({ username, password });

    if (user instanceof Error)
      return new Error(user.message);

    return await db.insert(user);
  }