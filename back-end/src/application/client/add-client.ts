import { Client } from '../../domain/entities';

interface OrmMethods {
  insert: (client: Client) => Promise<Client | Error>
}

interface BuildMethods {
  db: OrmMethods;
  makeClient: (client: Partial<Client>) => Promise<Client | Error>;
}

export const makeAddClient = ({ db, makeClient }: BuildMethods) =>
  async (client: Omit<Client, '_id'>) => {
    const result = await makeClient(client);

    if (result instanceof Error)
      return new Error(result.message);

    return await db.insert(result);
  }