import { makeUserDb } from './user-db';
import { createUsersDb } from '../../../infrastructure/user/db';

export const db = makeUserDb({ createDB: createUsersDb });