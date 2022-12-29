import { User } from '../../../domain/entities';
import { model, Schema } from 'mongoose';

const Users = new Schema<User>({
  _id: {
    type: String,
    required: true,
    immutable: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    unique: true,
    type: String,
  }
}, { timestamps: true });

model<User>('users', Users);