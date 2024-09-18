import { Request, Response } from 'express';
import * as commentService from '../services/commentService';

export async function getCommentsByPostId(req: Request, res: Response) {
  const { id } = req.params;
  const comments = await commentService.getCommentsByPostId(id);
  res.json(comments);
}

export async function addComment(req: Request, res: Response) {
  const { id } = req.params;
  const { content } = req.body;
  const newComment = await commentService.addComment(id, content);
  if (newComment) {
    res.status(201).json(newComment);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
}
