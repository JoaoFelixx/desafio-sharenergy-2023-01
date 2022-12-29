import { Client } from '../../domain/entities';

interface OrmMethods {
  find: () => Promise<Client[] | Error>
}

interface ORM {
  db: OrmMethods;
}

export const makeFindClient = ({ db }: ORM) =>
  async (): Promise<Client[] | Error> =>
    await db.find();