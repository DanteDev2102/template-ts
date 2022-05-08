import { z } from 'zod';

export const username = z
  .string({
    required_error: 'username is required',
    invalid_type_error: 'username must be a string'
  })
  .min(4, { message: 'username min is 4 characters' })
  .max(25, { message: 'username max is 25 characters' });

export const password = z
  .string({
    required_error: 'password is required',
    invalid_type_error: 'password must be a string'
  })
  .min(6, { message: 'short password, min 6 characters' })
  .max(32, { message: 'very long password, max 32 characters' });

export const email = z
  .string({
    required_error: 'email is required',
    invalid_type_error: 'email must be a string'
  })
  .email('invalid email address');
