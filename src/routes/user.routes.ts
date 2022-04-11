import { IUser } from '@/models';
import { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { RegisterUser } from '../services';

const routes = Router();

routes.post(
  '/',
  [
    body('username').isAlphanumeric(),
    body('email').isEmail(),
    body('password').isStrongPassword(),
    body('passwordConfirm').isStrongPassword()
  ],
  (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);
      const newUserData: IUser = req.body;
      const newUser = RegisterUser(newUserData, errors);
      res.status(201).send(newUser);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

export default routes;
