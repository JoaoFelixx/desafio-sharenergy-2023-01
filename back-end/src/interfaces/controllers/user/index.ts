import { sign } from 'jsonwebtoken';
import { makePostAuth } from './post-auth';
import { makePostUser } from './post-user';
import { authUser, addUser } from '../../../application/user'

const postUser = makePostUser({ addUser });
const postAuth = makePostAuth({ sign, authUser });

export const userController = Object.freeze({
  postAuth, postUser
});