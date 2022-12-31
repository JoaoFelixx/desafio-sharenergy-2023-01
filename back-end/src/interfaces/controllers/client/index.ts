import { makeGetClient } from './get-client';
import { makePutClient } from './put-client';
import { makePostClient } from './post-client';
import { makeDeleteClient } from './delete-client';
import {
  addClient,
  editClient,
  findClient,
  removeClient,
} from '../../../application/client';

const getClient = makeGetClient({ findClient });
const putClient = makePutClient({ editClient });
const postClient = makePostClient({ addClient });
const deleteClient = makeDeleteClient({ removeClient });

export const clientController = Object.freeze({
  getClient, putClient, postClient, deleteClient
});