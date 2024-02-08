const express = require('express')
const router = express.Router()  
const Order = require('../models/Orders');  

router.post('/restaurantOrderData', async (req, res) => {
 

    try {
        const { restaurantId } = req.body;

        // Find orders that match the RestaurantId
        const orders = await Order.find({
            'order_data': {
                $elemMatch: {
                    $elemMatch: { 'RestaurantId': restaurantId }
                }
            }
        });

        // Filter out order_data that doesn't have the specified RestaurantId
        const filteredOrders = orders.map(order => ({
            ...order.toObject(),
            order_data: order.order_data.filter(item => item.some(i => i.RestaurantId === restaurantId))
        }));

        res.json({ orderData: filteredOrders });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/updateOrderConfirmation', async (req, res) => {
    try {
        const { orderId, foodId } = req.body;

        // Find the order by orderId and update orderConfirmation to true
        const updatedOrder = await Order.findOneAndUpdate(
            {
                '_id': orderId,
                'order_data': {
                    $elemMatch: {
                        $elemMatch: { 'id': foodId, 'orderConfirmation': false }
                    }
                }
            },
            { $set: { 'order_data.$[outer].$[inner].orderConfirmation': true } },
            { arrayFilters: [{ 'outer.id': foodId }, { 'inner.id': foodId, 'inner.orderConfirmation': false }], new: true }
        );

        if (!updatedOrder) {
            return res.status(404).json({ error: 'Order not found or already confirmed' });
        }

        res.json({ message: 'Order confirmation updated successfully', updatedOrder });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



module.exports = router;