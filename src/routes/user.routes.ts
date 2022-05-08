import { Router, Request, Response, IRouter } from 'express';
import { validateSchema } from '../middlewares';
import { CreateUserSchema } from '../schemas';
import { CreateUserService } from '../api-services';

const routes: IRouter = Router();

routes.put('/register', validateSchema(CreateUserSchema), async (req: Request, res: Response): Promise<void> => {
  try {
    const newUser = await CreateUserService(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ errors: [error.message] });
    }
    res.status(500).json({ errors: error });
  }
});

export default routes;
