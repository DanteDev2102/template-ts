import mongoose from 'mongoose';
import config from '../config';

mongoose.Promise = global.Promise;

export const connectDB = async (URI: string) => {
  try {
    await mongoose.connect(URI, { user: config.userDB, pass: config.passDB });
    console.log('[db] connected success');
  } catch (error) {
    console.error('[db] error:', error);
    process.exit(1);
  }
};
