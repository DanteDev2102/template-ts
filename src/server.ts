import { createHttpTerminator } from 'http-terminator';
import app from './app';
import config from './config';
import connect from './database/connect.db';

const server = app.listen(config.portServer, () => {
  console.log(`server listenin on ${config.portServer}`);
  console.log('kill server press ctrl + c');
  connect(config.mongoURI);
});

const httpterminator = createHttpTerminator({ server });

process.on('uncaughtException', error => {
  console.log('uncaugth exception: ', error);
  process.exit(1);
});

setTimeout(() => {
  httpterminator.terminate();
}, 1000);
