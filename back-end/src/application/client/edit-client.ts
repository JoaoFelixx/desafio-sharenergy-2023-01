import { Client } from '../../domain/entities';

interface OrmMethods {
  edit: (client: Client) => Promise<Client | Error>
}

interface BuildMethods {
  db: OrmMethods;
  makeClient: (client: Partial<Client>) => Promise<Client | Error>;
}

export const makeEditClient = ({ db, makeClient }: BuildMethods) =>
  async (client: Omit<Client, '_id'>) => {
    const result = await makeClient(client);

    if (result instanceof Error)
      return new Error(result.message);

    return await db.edit(result);
  }