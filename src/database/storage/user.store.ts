import { IUser } from '@/models';
import { UserSchema } from '../schemas';

export const CreateNewUser = async (newUserData: IUser) => {
  try {
    const isExistUser = UserSchema.findOne({ email: newUserData.email });

    if (!!isExistUser) throw new Error('there is already a registered user');

    const newUser = await UserSchema.create(newUserData);
    delete newUser.password;

    return newUser;
  } catch (error: any) {
    return { error: error.message };
  }
};
