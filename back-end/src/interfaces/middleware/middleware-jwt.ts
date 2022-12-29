import jwt from 'jsonwebtoken';
import { HttpRequest, HttpResponse, HttpNextFunction } from '../../domain/entities';

export function middlewareJwt(request: HttpRequest, response: HttpResponse, next: HttpNextFunction) {
  try {
    const { authorization } = request.headers;

    if (!authorization) return response.sendStatus(401);

    const token = authorization.replace('Bearer', '').trim();

    const tokenIsValid = jwt.verify(token, process.env.SECRET_KEY_JWT || '');

    if (!tokenIsValid)
      throw new Error();

    next();

  } catch (err) {
    return response.sendStatus(401);
  }
}