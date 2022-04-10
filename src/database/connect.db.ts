import mongoose from 'mongoose'

mongoose.Promise = global.Promise

export const connectDB = async (URI: string) => {
  try {
    await mongoose.connect(URI, {})
    console.log('[db] connected success')
  } catch (error) {
    console.error('[db] error:', error)
    process.exit(1)
  }
}

export default connectDB
