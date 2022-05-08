import { AnyZodObject, ZodEffects, ZodError } from 'zod';
import { Request, Response, NextFunction } from 'express';

export const validateSchema =
  (schema: ZodEffects<AnyZodObject>) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await schema.parseAsync({ body: req.body, query: req.query, headers: req.headers, params: req.params });
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ errors: error.issues.map(({ message }) => message) });
      }
    }
  };
