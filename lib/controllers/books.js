const { Router } = require('express');
const Book = require('../models/Book');

module.exports = Router()
  
  .get('/:id', async (req, res) => {
    const books = await Book.getById(req.params.id);
    console.log('Books: ', books);
    res.json(books);
  })


  .get('/', async (req, res) => {
    const books = await Book.getAll();
    res.json(books);
  });
