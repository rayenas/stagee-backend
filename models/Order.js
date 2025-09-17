const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  startLocation: {
    lat: Number,
    lng: Number
  },
  endLocation: {
    lat: Number,
    lng: Number
  },
  price: Number,
  status: { type: String, enum: ['pending', 'en_cours', 'livré'], default: 'pending' },
  livreur: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null }
});

module.exports = mongoose.model('Order', orderSchema);
