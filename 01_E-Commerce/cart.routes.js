// Add Product to Cart
app.post('/cart/add', (req, res) => {
    // Logic to add a product to the user's shopping cart
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
