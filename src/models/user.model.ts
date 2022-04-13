import { Document } from 'mongoose';
export interface IUser extends Document {
  username: string;
  password?: string;
  passwordConfirm?: string;
  email?: string;
  avatar?: string;
  token?: string;
}
