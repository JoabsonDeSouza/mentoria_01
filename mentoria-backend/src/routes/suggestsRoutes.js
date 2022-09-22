import express from 'express';
import suggestsController from '../controller/suggestsController';

const router = express.Router();

router.get('/suggests', suggestsController.getAllSuggests);

export default router;