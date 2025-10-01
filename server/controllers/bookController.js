const Book = require('../models/Book');
const path = require('path');

exports.addBook = async (req, res) => {
  const { title, author, condition } = req.body;
  const image = req.file.filename;
  const owner = req.userId;

  const book = await Book.create({ title, author, condition, image, owner });
  res.status(201).json(book);
};

exports.getBooks = async (req, res) => {
  const books = await Book.find().populate('owner', 'name');
  res.json(books);
};

exports.getMyBooks = async (req, res) => {
  const books = await Book.find({ owner: req.userId });
  res.json(books);
};
