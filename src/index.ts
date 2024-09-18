import express, { Request, Response } from 'express';
import postRoutes from './domain/posts/routes/posts';
import commentRoutes from './domain/comments/routes/comments';
import { createTables, openDatabase } from './db/database';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const port = 3000;

// Middleware para tratar JSON
app.use(express.json());

// Iniciar o banco de dados e criar tabelas
createTables();

// Configuração das rotas
app.use('/posts', postRoutes);
app.use('/posts', commentRoutes);

// Iniciar o servidor
app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
