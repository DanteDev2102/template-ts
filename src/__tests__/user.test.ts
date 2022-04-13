// test en progreso xd...

import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import fs from 'fs';

import app from '../app';

chai.use(chaiHttp);

describe('User Service', () => {
  describe('POST Register User', () => {
    it('succefully register user', async done => {
      await chai
        .request(app)
        .post('/user')
        .set('Content-Type', 'application/json')
        .field('username', 'DanteDev')
        .field('email', 'jdap.dmc@gmail.com')
        .field('password', '  Test123$&> ')
        .field('passwordConfirm', '  Test123$&> ')
        .attach('avatar', fs.readFileSync('src/files/default.png'), 'default.png')
        .end((error, res) => {
          expect(error).to.be.null;
          expect(res).to.have.status(201);
          expect(res.body).to.have.property('message');
          expect(res.body).to.have.property('data');
          expect(res.body.data).to.have.property('_id');
          expect(res.body.data).to.have.property('username');
          expect(res.body.data).to.have.property('email');
          expect(res.body.data).to.have.property('avatar');
        });
    });
  });
});
