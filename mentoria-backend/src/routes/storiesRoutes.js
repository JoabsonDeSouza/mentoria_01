import express from 'express';
import storiesController from '../controller/storiesController';

const router = express.Router();

router.get('/stories', storiesController.getAllStories);

export default router;
