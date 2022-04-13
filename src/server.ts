import app from './app';
import config from './config';
import { connectDB } from './database';

app.listen(config.portServer, () => {
  console.log(`server listenin on ${config.hostServer}:${config.portServer}`);
  console.log('kill server press ctrl + c');
  connectDB(config.mongoURI);
});

process.on('uncaughtException', error => {
  console.error('uncaugth exception: ', error);
});
