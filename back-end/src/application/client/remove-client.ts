import { User } from '../../domain/entities';

interface OrmMethods {
  remove: (user: Pick<User, '_id'>) => Promise<void | Error>
}

interface ORM {
  db: OrmMethods;
}

export const makeRemoveClient = ({ db }: ORM) =>
  async ({ _id }: Pick<User, '_id'>): Promise<void | Error> =>
    await db.remove({ _id });