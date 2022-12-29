import { User } from "../../domain/entities";
import { model } from "mongoose";
import '../database/schemas/User';

const Users = model<User>('users');

export const createUsersDb = () => Users;