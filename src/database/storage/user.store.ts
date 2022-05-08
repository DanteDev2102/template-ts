import { IUser } from '../types';
import { UserModel } from '../models';

export const CreateNewUser = async (newUserData: IUser): Promise<IUser> => {
  return await UserModel.create(newUserData);
};
