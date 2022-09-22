import express from 'express';
import userController from '../controller/userController';

const router = express.Router();

router.get('/user', userController.getAllUser);

export default router;