import { Client } from "../../domain/entities";
import { model } from "mongoose";
import '../database/schemas/Clients';

const Clients = model<Client>('clients');

export const createClientsDb = () => Clients;