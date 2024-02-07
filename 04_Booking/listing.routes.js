// Create Listing
app.post('/listings', (req, res) => {
    // Logic 
});

// Read Listing
app.get('/listings/:listingId', (req, res) => {
    const listingId = req.params.listingId;
    // Logic 
});

// Update Listing
app.put('/listings/:listingId', (req, res) => {
    const listingId = req.params.listingId;
    // Logic 
});

// Delete Listing
app.delete('/listings/:listingId', (req, res) => {
    const listingId = req.params.listingId;
    // Logic
});

// Search Listings
app.get('/listings/search', (req, res) => {
    const query = req.query.q;
    // Logic to perform a search for listings based on query
});

// User Reviews
app.post('/listings/:listingId/reviews', (req, res) => {
    const listingId = req.params.listingId;
    // Logic to add a review for the listing 
});
