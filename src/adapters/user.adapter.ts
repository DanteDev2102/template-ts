import { IUser } from '@/models';

export const FormatUserData = (user: IUser) => {
  return {
    _id: user._id,
    username: user.username,
    email: user.email,
    avatar: user.avatar,
    error: ''
  };
};
