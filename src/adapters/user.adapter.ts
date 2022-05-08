import { TUser } from '../types';

export const FormatUserData = async (user: TUser): Promise<TUser> => {
  return {
    _id: user._id,
    username: user.username,
    email: user.email,
    avatar: user.avatar
  };
};
