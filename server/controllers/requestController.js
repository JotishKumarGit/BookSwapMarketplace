const Request = require('../models/Request');

exports.createRequest = async (req, res) => {
  const { bookId } = req.body;
  const requester = req.userId;

  const request = await Request.create({ book: bookId, requester });
  res.status(201).json(request);
};

exports.getRequests = async (req, res) => {
  const requests = await Request.find()
    .populate('requester', 'name')
    .populate('book', 'title');
  res.json(requests);
};

exports.updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const updated = await Request.findByIdAndUpdate(id, { status }, { new: true });
  res.json(updated);
};
