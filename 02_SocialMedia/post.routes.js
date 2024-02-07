// Create Post
app.post('/posts', (req, res) => {
    // Logic 
});

// Read Post
app.get('/posts/:postId', (req, res) => {
    const postId = req.params.postId;
    // Logic 
});

// Update Post
app.put('/posts/:postId', (req, res) => {
    const postId = req.params.postId;
    // Logic 
});

// Delete Post
app.delete('/posts/:postId', (req, res) => {
    const postId = req.params.postId;
    // Logic
});


/*******************************************************************/


app.post('/posts/:postId/report', (req, res) => {
    const postId = req.params.postId;
    // Logic to report the post 
});