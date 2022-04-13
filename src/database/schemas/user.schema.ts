import { Schema, model } from 'mongoose';
import { IUser } from '@/models/user.model';
import config from '../../config';

const mySchema = new Schema<IUser>({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: `${config.hostServer}:${config.portServer}/files/default.webp`
  }
});

export const UserSchema = model<IUser>('user', mySchema);

export default UserSchema;
