import { createClientsDb } from '../../../infrastructure/client/db';
import { makeClientDb } from './client-db';

export const clientDB = makeClientDb({ createDB: createClientsDb });