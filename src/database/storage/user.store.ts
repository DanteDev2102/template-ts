import { FormatUserData } from '../../adapters';
import { IUser } from '@/models';
import { UserSchema } from '../schemas';

export const CreateNewUser = async (newUserData: IUser) => {
  const { email, username } = newUserData;
  try {
    const isExistUser = await UserSchema.findOne({ $or: [{ email }, { username }] });

    if (isExistUser) throw new Error('there is already a registered user');

    const newUser = new UserSchema(newUserData);
    const dataUser = await newUser.save();

    if (!dataUser) throw new Error('error in register user');

    const formatUser = FormatUserData(dataUser);

    return formatUser;
  } catch (error: any) {
    return { error: error.message };
  }
};
