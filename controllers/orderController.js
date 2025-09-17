const Order = require('../models/Order');
const User = require('../models/User');

exports.getOrders = async (req, res) => {
  try {
    // Only pending orders
    const orders = await Order.find({ status: 'pending' });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.startOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if(!order) return res.status(404).json({ message: 'Order not found' });
    if(order.status !== 'pending') return res.status(400).json({ message: 'Order already started' });

    order.status = 'en_cours';
    order.livreur = req.userId;
    await order.save();

    res.json({ message: 'Order started' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateLocation = async (req, res) => {
  try {
    console.log('req.userId:', req.userId);
    console.log('req.body:', req.body);

    const { lat, lng } = req.body;
    const user = await User.findById(req.userId);
    if(!user) return res.status(404).json({ message: 'User not found' });

    user.lastLocation = { lat, lng, updatedAt: new Date() };
    await user.save();

    res.json({ message: 'Location updated' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};


exports.finishOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if(!order) return res.status(404).json({ message: 'Order not found' });
    if(order.status !== 'en_cours' || order.livreur.toString() !== req.userId) 
      return res.status(400).json({ message: 'You cannot finish this order' });

    order.status = 'livré';
    await order.save();

    res.json({ message: 'Order finished' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const newOrder = req.body;
    const order = await Order.create(newOrder);
    res.status(201).json({ success: true, order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
};

