// Search Functionality

app.get('/search', (req, res) => {
    const query = req.query.q;
    // Logic to perform search based on query and render search results
});


// 404 Page
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});