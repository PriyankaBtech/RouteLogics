// Read Cart
app.get('/cart/:userId/items', (req, res) => {
    const userId = req.params.userId;
    // Logic 
});

// Update Cart Item Quantity
app.put('/cart/:userId/items/:itemId', (req, res) => {
    const userId = req.params.userId;
    const itemId = req.params.itemId;
    // Logic 
});

// Remove Item from Cart
app.delete('/cart/:userId/items/:itemId', (req, res) => {
    const userId = req.params.userId;
    const itemId = req.params.itemId;
    // Logic 
});


/************************************************************************/


// Add Product to Cart
app.post('/cart/add', (req, res) => {
    // Logic
});


// Remove Product from Cart
app.post('/cart/remove/:productId', (req, res) => {
    const productId = req.params.productId;
    // Logic
});


// Increase Product Quantity in Cart
app.post('/cart/increase/:productId', (req, res) => {
    const productId = req.params.productId;
    // Logic  
});


// Decrease Product Quantity in Cart
app.post('/cart/decrease/:productId', (req, res) => {
    const productId = req.params.productId;
    // Logic 
});
