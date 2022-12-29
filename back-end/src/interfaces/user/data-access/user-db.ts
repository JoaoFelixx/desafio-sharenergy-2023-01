import { User } from '../../../domain/entities';
import { Model } from 'mongoose';

interface BuildConnection {
  createDB: () => Model<User>;
}

export const makeUserDb = ({ createDB }: BuildConnection) => {
  const userDB = createDB();

  const getByUsername = async ({ username }: Pick<User, 'username'>) =>
    await userDB.findOne({ username });

  async function insert({ _id, ...user }: User): Promise<User | Error> {
    try {
      const result = await userDB.create({ _id, ...user });

      return result;
    } catch (error) {
      return new Error('Error creating user');
    }
  }

  return { getByUsername, insert };
}