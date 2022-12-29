interface User {
  _id: string;
  username: string;
  password: string;
}

interface BuildMethods {
  makeId: () => string;
  makeHash: (value: string, salt: number) => Promise<string>;
  validator(user: User): { error?: string };
}

class UserEntity implements User {
  public readonly _id: string;
  public username: string;
  public password: string;

  constructor(
    user: Partial<User>,
    makeId: BuildMethods['makeId']
  ) {
    Object.assign(this, user)
    this._id = user._id || makeId();
  }
}

export const buildMakeUser = ({ makeId, makeHash, validator }: BuildMethods) =>
  async (user: Partial<User>): Promise<User | Error> => {
    try {
      const createdUser = new UserEntity(user, makeId)

      createdUser.password = await makeHash(createdUser.password, 8);

      const { error } = validator(createdUser);

      if (error)
        throw new Error();

      return Object.freeze(createdUser);

    } catch (error) {
      return new Error('Error building User');
    }
  }