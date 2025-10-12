// import { Router } from "express";
// import contactsRouter from './contacts.js';
// import authRouter from './auth.js';

// const router = Router();

// router.use('/contacts', contactsRouter);
// router.use('/auth', authRouter);
// console.log('✅ Auth router connected');
// export default router;

import { Router } from 'express';
import contactsRouter from './contacts.js';
import authRouter from './auth.js';

const router = Router();

router.use('/contacts', contactsRouter);
router.use('/auth', authRouter);

export default router;