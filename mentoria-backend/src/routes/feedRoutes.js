import express from 'express';
import feedController from '../controller/feedController';

const router = express.Router();

router.get('/feed', feedController.getAllFeed);

export default router;
