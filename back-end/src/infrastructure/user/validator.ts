import { User } from "../../domain/entities";

interface ErrorValidator {
  error?: string;
}

export const validator = (user: User): ErrorValidator => {
  const keys = Object.keys(user);

  const invalidProperties = keys
    .filter((key) => !user[key as keyof User])
    .map((key) => `${key} is invalid`);

  return {
    error: invalidProperties.join(', ') || undefined
  }
}