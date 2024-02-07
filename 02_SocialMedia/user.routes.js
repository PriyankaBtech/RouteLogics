// Create User
app.post('/users', (req, res) => {
    // Logic to create a new user
});

// Read User
app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    // Logic to retrieve and render details of the user with the specified userId
});

// Update User
app.put('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    // Logic to update the user with the specified userId
});

// Delete User
app.delete('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    // Logic to delete the user with the specified userId
});



/****************************************************/


// Block/Unblock User
app.post('/users/:userId/block', (req, res) => {
    const userId = req.params.userId;
    // Logic
});

app.post('/users/:userId/unblock', (req, res) => {
    const userId = req.params.userId;
    // Logic to unblock the user 
});

