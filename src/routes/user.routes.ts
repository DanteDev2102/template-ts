import { IUser } from '@/models';
import { Router, Request, Response, IRouter } from 'express';
import { body, validationResult } from 'express-validator';
import { RegisterUser } from '../services';
import { __filterImages } from '../middlewares/';

const routes: IRouter = Router();

/**
 * @swagger
 * /users:
 *  post:
 *    tags:
 *      - users
 *    summary: "register user"
 *    description: details
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/users"
 *    responses:
 *      '201':
 *        description: sucessfully register user
 *      '400':
 *        description: bad request
 *      '500':
 *        description: internal error
 *      '417':
 *        description: is exist user in db
 *
 */

routes.post(
  '/',
  [
    __filterImages.single('avatar'),
    body('username').isAlphanumeric().trim().escape(),
    body('email').isEmail().normalizeEmail().trim().escape(),
    body('password').isStrongPassword().trim().escape(),
    body('passwordConfirm').isStrongPassword().trim().escape()
  ],
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      const newUserData: IUser = req.body;

      const newUser = await RegisterUser(newUserData, req.file, errors);

      res.status(201).send(newUser);
    } catch ({ message }) {
      if (Array.isArray(message)) res.status(400).send(message);
      else if (message === 'passwords are diferents') res.status(400).send(message);
      else if (message === 'error in register user') res.status(500).send(message);
      else if (message === 'there is already a registered user') res.status(417).send(message);
      else res.status(500).send('internal error');
    }
  }
);

export default routes;
