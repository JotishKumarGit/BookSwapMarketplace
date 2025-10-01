const mongoose = require('mongoose');
const RequestSchema = new mongoose.Schema({
  requester: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  status: { type: String, enum: ['pending', 'accepted', 'declined'], default: 'pending' }
});
module.exports = mongoose.model('Request', RequestSchema);
