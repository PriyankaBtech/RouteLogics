// Create Category
app.post('/categories', (req, res) => {
    // Logic 
});

// Read Category
app.get('/categories/:categoryId', (req, res) => {
    const categoryId = req.params.categoryId;
    // Logic
});

// Update Category
app.put('/categories/:categoryId', (req, res) => {
    const categoryId = req.params.categoryId;
    // Logic 
});

// Delete Category
app.delete('/categories/:categoryId', (req, res) => {
    const categoryId = req.params.categoryId;
    // Logic 
});
