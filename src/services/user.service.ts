import { IUser } from '@/models';
import { ErrorExpressValidator } from '@/models/errors.model';
import { hash } from 'bcryptjs';
import { CreateNewUser } from '../database/storage/user.store';
import config from '../config';

export const RegisterUser = async (newUserData: IUser, { filename }: any, errors: any): Promise<any> => {
  if (!errors.isEmpty()) {
    const error = errors.array().map((error: ErrorExpressValidator) => error.msg);
    return Promise.reject({ message: error });
  }

  if (filename) newUserData.avatar = `${config.hostServer}:${config.portServer}/files/${filename}`;

  const { password, passwordConfirm } = newUserData;

  if (password !== passwordConfirm) return Promise.reject({ message: 'passwords are diferents' });
  delete newUserData.passwordConfirm;

  try {
    newUserData.password = await hash(password, 10);
  } catch (error) {
    return Promise.reject({ message: 'error in register user' });
  }

  const newUser = await CreateNewUser(newUserData);
  if (newUser.error) return Promise.reject({ message: newUser.error });

  delete newUser.error;

  return Promise.resolve({ message: 'user created successfully', data: newUser });
};
