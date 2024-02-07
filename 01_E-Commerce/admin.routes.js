
app.get('/admin/dashboard', (req, res) => {
    // Logic to render admin dashboard page
});

app.get('/admin/products', (req, res) => {
    // Logic to render admin products management page
});

app.post('/admin/products/add', (req, res) => {
    // Logic to add a new product (admin only)
});

app.post('/admin/products/edit/:productId', (req, res) => {
    const productId = req.params.productId;
    // Logic to edit an existing product
});

app.post('/admin/products/delete/:productId', (req, res) => {
    const productId = req.params.productId;
    // Logic to delete a product 
});