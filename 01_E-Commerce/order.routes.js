// Create Order
app.post('/orders', (req, res) => {
    // Logic 
});

// Read Order
app.get('orders/:orderId', (req, res) => {
    const orderId = req.params.orderId;
    // Logic 
});

// Update Order
app.put('/orders/:orderId', (req, res) => {
    const orderId = req.params.orderId;
    // Logic 
});

// Delete Order
app.delete('/orders/:orderId', (req, res) => {
    const orderId = req.params.orderId;
    // Logic to delete the order with the specified orderId
});
