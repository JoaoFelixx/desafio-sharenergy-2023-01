import { Client } from '../../../domain/entities';
import { Model } from 'mongoose';

interface BuildConnection {
  createDB: () => Model<Client>;
}

export const makeClientDb = ({ createDB }: BuildConnection) => {
  const db = createDB();

  const find = async (): Promise<Client[] | Error> => await db.find();

  const remove = async ({ _id }: Pick<Client, '_id'>) => {
    try {
      await db.deleteOne({ _id });

    } catch (error) {
      return new Error('Error deleting client');
    }
  };

  const edit = async ({ _id, ...client }: Client): Promise<Client | Error> => {
    try {
      const result = await db.findByIdAndUpdate({ _id }, client);

      if (!result)
        throw new Error();

      return Object.freeze(
        Object.assign(
          result, client
        )
      )

    } catch (error) {
      return new Error('Error editing client')
    }
  }

  async function insert({ _id, ...client }: Client): Promise<Client | Error> {
    try {
      const result = await db.create({ _id, ...client });

      return result;
    } catch (error) {
      return new Error('Error creating client');
    }
  }

  return { find, edit, remove, insert };
}