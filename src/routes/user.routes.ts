import { IUser } from '@/models';
import { Router, Request, Response, IRouter } from 'express';
import { body, validationResult } from 'express-validator';
import { RegisterUser } from '../services';

const routes: IRouter = Router();

routes.post(
  '/',
  [
    body('username').isAlphanumeric().trim().escape(),
    body('email').isEmail().normalizeEmail(),
    body('password').isStrongPassword().trim().escape(),
    body('passwordConfirm').isStrongPassword().trim().escape()
  ],
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      const newUserData: IUser = req.body;

      const newUser = await RegisterUser(newUserData, errors);

      res.status(201).send(newUser);
    } catch ({ message }) {
      if (Array.isArray(message)) res.status(400).send(message);
      else if (message === 'passwords are diferents') res.status(400).send(message);
      else if (message === 'error in register user') res.status(500).send(message);
      else if (message === 'there is already a registered user') res.status(401).send(message);
      res.send('hola');
    }
  }
);

export default routes;
