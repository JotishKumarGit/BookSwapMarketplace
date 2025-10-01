const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Routes
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/books', require('./routes/books'));
// app.use('/api/requests', require('./routes/requests'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () => console.log('Server running on http://localhost:5000'));
  });
