import { createRouter } from '../../interfaces/express-adapters';
import { middlewareJwt } from '../../interfaces/middleware';
import {
  userController,
  clientController,
} from '../../interfaces/controllers';

const routes = createRouter();

routes.post('/auth', userController.postAuth);
routes.post('/users', userController.postUser);

routes.use(middlewareJwt);

routes.get('/clients', clientController.getClient);
routes.post('/clients', clientController.postClient);
routes.put('/clients/:_id', clientController.putClient);
routes.delete('/clients/:_id', clientController.deleteClient);

export { routes };