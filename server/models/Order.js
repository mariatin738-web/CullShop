const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  gameId: {
    type: Number,
    required: true
  },
  playerId: {
    type: String,
    required: true
  },
  diamondAmount: {
    type: String,
    required: true
  },
  paymentMethod: {
    type: String,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    default: 'pending'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', OrderSchema);
