import { Request, Response } from 'express';
import * as postService from '../services/postService';

export async function getAllPosts(req: Request, res: Response) {
  const posts = await postService.getAllPosts();
  res.json(posts);
}

export async function getPostById(req: Request, res: Response) {
  const { id } = req.params;
  const post = await postService.getPostById(id);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
}

export async function createPost(req: Request, res: Response) {
  const { title, content } = req.body;
  const newPost = await postService.createPost(title, content);
  res.status(201).json(newPost);
}
