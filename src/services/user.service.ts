import { hash } from 'bcryptjs';
import { CreateNewUser } from '../database/storage/user.store';
//import { IUser } from '../models/user.model';

type ErrorExpressValidator = {
  value: string;
  msg: string;
  param: string;
  location: string;
};

export const RegisterUser = async (newUserData: any, errors: any) => {
  if (!errors.isEmpty()) {
    const error = errors.array().map((error: ErrorExpressValidator) => error.msg);
    return Promise.reject({ message: error });
  }

  const { password, passwordConfirm } = newUserData;

  if (password !== passwordConfirm) return Promise.reject({ message: 'passwords are diferents' });
  delete newUserData.passwordConfirm;

  try {
    newUserData.password = await hash(password, 10);
  } catch (error) {
    return Promise.reject({ message: 'error in register user' });
  }

  const newUser: any = await CreateNewUser(newUserData);
  console.log('hola');

  if (newUser.error) return Promise.reject({ message: newUser.error });

  return Promise.resolve({ message: 'user created successfully', data: newUser });
};
