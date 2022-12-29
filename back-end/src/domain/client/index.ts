import { validator } from '../../infrastructure/client/validator';
import { buildMakeClient } from './client';
import { randomUUID as makeId } from 'crypto';

export const makeClient = buildMakeClient({
  makeId, validator
});