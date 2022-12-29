import { validator } from '../../infrastructure/user/validator';
import { buildMakeUser } from './user';
import { hash as makeHash } from 'bcryptjs'
import { randomUUID as makeId } from 'crypto'

export const makeUser = buildMakeUser({
  makeId, makeHash, validator
});