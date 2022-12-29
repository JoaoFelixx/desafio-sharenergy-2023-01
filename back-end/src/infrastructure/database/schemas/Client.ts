import { Client } from '../../../domain/entities';
import { model, Schema } from 'mongoose';

const Clients = new Schema<Client>({
  _id: {
    type: String,
    required: true,
    immutable: true,
  },
  address: {
    type: String,
    required: true,
  },
  cpf: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone_number: {
    type: Number,
    required: true,
  }
}, { timestamps: true });

model<Client>('clients', Clients);