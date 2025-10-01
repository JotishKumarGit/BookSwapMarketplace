const express = require('express');
const auth = require('../middleware/authMiddleware');
const { createRequest, getRequests, updateStatus } = require('../controllers/requestController');

const router = express.Router();
router.post('/', auth, createRequest);
router.get('/', auth, getRequests);
router.put('/:id', auth, updateStatus);

module.exports = router;
