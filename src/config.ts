import 'dotenv/config'

export const config = {
  // server configs

  portServer: process.env.PORT_SERVER || 3001,
  hostServer: process.env.HOST_SERVER || 'http://localhost',

  // db config

  mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/test'
}

export default config
