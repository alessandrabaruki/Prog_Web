import { openDatabase } from '../../../db/database';
import { v4 as uuidv4 } from 'uuid';

export async function getCommentsByPostId(postId: string) {
  const db = await openDatabase();
  return db.all('SELECT * FROM comments WHERE postId = ?', postId);
}

export async function addComment(postId: string, content: string) {
  const db = await openDatabase();
  const post = await db.get('SELECT * FROM posts WHERE id = ?', postId);
  if (post) {
    const id = uuidv4();
    await db.run('INSERT INTO comments (id, postId, content) VALUES (?, ?, ?)', [id, postId, content]);
    return { id, postId, content };
  }
  return null;
}
