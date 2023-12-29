import express from 'express';

import { getAllBooks, addBook, deleteBook } from '../controller/books.js';

const route = express.Router();

route.get('/',getAllBooks);

route.post('/',addBook);

route.delete('/:id',deleteBook);

export default route;