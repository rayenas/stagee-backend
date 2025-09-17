const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getOrders, startOrder, updateLocation, finishOrder, createOrder } = require('../controllers/orderController');

router.use(auth);

router.get('/', getOrders);
router.post('/start/:orderId', startOrder);
router.post('/location', updateLocation);
router.post('/finish/:orderId', finishOrder);
router.post('/create', createOrder);
module.exports = router;
// post /api/orders