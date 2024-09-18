import { Router } from 'express';
import * as commentController from '../controllers/commentController';

const router = Router();

router.get('/:id/comments', commentController.getCommentsByPostId);
router.post('/:id/comments', commentController.addComment);

export default router;
