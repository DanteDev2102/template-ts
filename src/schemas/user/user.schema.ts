import { z } from 'zod';
import { email, password, username } from './values.schema';

export const CreateUserSchema = z
  .object({
    body: z.object({ username, password, passwordConfirm: password, email }).strict()
  })
  .refine(({ body }) => body.password === body.passwordConfirm, {
    message: "Passwords don't match",
    path: ['passwordConfirm']
  });
