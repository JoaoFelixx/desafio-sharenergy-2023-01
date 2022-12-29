import { db } from '../../interfaces/user/data-access';
import { compare } from 'bcryptjs';
import { makeAuthUser } from './auth-user';
import { makeAddUser } from './add-user';
import { makeUser } from '../../domain/user';

const authUser = makeAuthUser({ db, compare });
const addUser = makeAddUser({ db, makeUser })

export { authUser, addUser }