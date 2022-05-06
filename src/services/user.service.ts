import { IUser } from '@/models';
import { ErrorExpressValidator } from '@/models/errors.model';
import { hash } from 'bcryptjs';
import { CreateNewUser } from '../database/storage/user.store';
import config from '../config';

export const RegisterUser = async (newUserData: IUser, { filename }: any, errors: any): Promise<any> => {
  try {
    if (!errors.isEmpty()) {
      const error = errors.array().map((error: ErrorExpressValidator) => error.msg);
      throw new Error(error);
    }

    if (filename) newUserData.avatar = `${config.hostServer}:${config.portServer}/files/${filename}`;

    const { password, passwordConfirm } = newUserData;

    if (password !== passwordConfirm) throw new Error('passwords are diferents');
    delete newUserData.passwordConfirm;

    try {
      newUserData.password = await hash(password, 10);
    } catch (error) {
      throw new Error('error in register user');
    }

    const newUser = await CreateNewUser(newUserData);
    if (newUser.error) throw new Error(newUser.error);

    delete newUser.error;

    return { message: 'user created successfully', data: newUser };
  } catch (error) {
    return error;
  }
};
