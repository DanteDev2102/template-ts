import { Schema, model } from 'mongoose';
import { IUser } from '../../models/user.model';

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
  avatar: String
});

export const UserSchema = model<IUser>('user', mySchema);

export default UserSchema;
