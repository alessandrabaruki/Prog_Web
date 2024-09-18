import { openDatabase } from '../../../db/database';
import { v4 as uuidv4 } from 'uuid';

export async function getAllPosts() {
  const db = await openDatabase();
  return db.all('SELECT * FROM posts');
}

export async function getPostById(id: string) {
  const db = await openDatabase();
  return db.get('SELECT * FROM posts WHERE id = ?', id);
}

export async function createPost(title: string, content: string) {
  const id = uuidv4();
  const db = await openDatabase();
  await db.run('INSERT INTO posts (id, title, content) VALUES (?, ?, ?)', [id, title, content]);
  return { id, title, content };
}
