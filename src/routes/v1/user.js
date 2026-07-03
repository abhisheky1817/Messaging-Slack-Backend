import express from 'express';

import { signUp, signIn } from '../../controllers/userController.js';
import { userSignUpSchema, userSignInSchema } from '../../validators/userSchema.js';
import { validate } from '../../validators/zodValidator.js';

const router = express.Router();

router.post('/signup', validate(userSignUpSchema), signUp);

router.post('/signin', validate(userSignInSchema), signIn);

export default router;
