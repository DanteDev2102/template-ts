import { CreateNewUser } from '../database';
import { hash } from 'bcryptjs';
import { FormatUserData } from '../adapters';
import { IUser } from '../database';

export const CreateUserService = async (dataNewUser: IUser): Promise<any> => {
  dataNewUser.password = await hash(dataNewUser.password as string, 10);
  const newUser = await CreateNewUser(dataNewUser);
  const formatedUser = await FormatUserData(newUser);
  return { data: { ...formatedUser } };
};
