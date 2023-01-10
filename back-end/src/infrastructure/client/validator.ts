import { Client } from '../../domain/entities';

interface ErrorValidator {
  error?: string;
}

export const validator = (client: Client): ErrorValidator => {
  const keys = Object.keys(client);

  const invalidProperties = keys
    .filter((key) => !client[key as keyof Client])
    .map((key) => `${key} is invalid`);

  return {
    error: invalidProperties.join(', ') || undefined
  }
}