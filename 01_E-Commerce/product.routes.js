
// Create Product
app.post('/products', (req, res) => {
    // Logic 
});

// Read Product
app.get('/products/:productId', (req, res) => {
    const productId = req.params.productId;
    // Logic 
});

// Update Product
app.put('/products/:productId', (req, res) => {
    const productId = req.params.productId;
    // Logic 
});

// Delete Product
app.delete('/products/:productId', (req, res) => {
    const productId = req.params.productId;
    // Logic 
});


/*********************************************************************/

// Product Reviews
app.get('/products/:productId/reviews', (req, res) => {
    const productId = req.params.productId;
    // Logic to retrieve and render reviews for the product with productId
});

app.post('/products/:productId/reviews', (req, res) => {
    const productId = req.params.productId;
    // Logic to submit a review for the product with productId
});
