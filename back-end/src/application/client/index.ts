import { makeAddClient } from './add-client';
import { makeEditClient } from './edit-client';
import { makeFindClient } from './find-client';
import { makeRemoveClient } from './remove-client';
import { makeClient } from '../../domain/client'
import { clientDB as db } from '../../interfaces/client/data-access';

const addClient = makeAddClient({ makeClient, db });
const editClient = makeEditClient({ makeClient, db })
const findClient = makeFindClient({ db });
const removeClient = makeRemoveClient({ db });

export {
  addClient, editClient, findClient, removeClient
}