import { createRouter } from '../../interfaces/express-adapters';
import { middlewareJwt } from '../../interfaces/middleware';
import { userController } from '../../interfaces/controllers';

const routes = createRouter();

routes.post('/auth', userController.postAuth);
routes.post('/users', userController.postUser);

routes.use(middlewareJwt);

export { routes }