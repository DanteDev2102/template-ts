import { IUser } from '../models/user.model';

export const RegisterUser = (newUserData: IUser, errors: any) => {
  if (!errors.isEmpty()) {
    return Promise.reject({ errors: errors.array() });
  }
  return Promise.resolve(newUserData);
};
