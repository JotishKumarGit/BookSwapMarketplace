const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const auth = require('../middleware/authMiddleware');
const { addBook, getBooks, getMyBooks } = require('../controllers/bookController');

const router = express.Router();
router.post('/', auth, upload.single('image'), addBook);
router.get('/', getBooks);
router.get('/mine', auth, getMyBooks);

module.exports = router;
