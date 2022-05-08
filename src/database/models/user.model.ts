import { Schema, model } from 'mongoose';
import { IUser } from '@/database/types';
import config from '../../config';

const myModel = new Schema<IUser>({
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
    required: true,
    unique: true
  },
  avatar: {
    type: String,
    default: `${config.hostServer}:${config.portServer}/files/default.png`
  }
});

export const UserModel = model<IUser>('user', myModel);
