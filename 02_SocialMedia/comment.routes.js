// Create Comment
app.post('/posts/:postId/comments', (req, res) => {
    const postId = req.params.postId;
    // Logic 
});

// Read Comment
app.get('/posts/:postId/comments/:commentId', (req, res) => {
    const postId = req.params.postId;
    const commentId = req.params.commentId;
    // Logic 
});

// Update Comment
app.put('/posts/:postId/comments/:commentId', (req, res) => {
    const postId = req.params.postId;
    const commentId = req.params.commentId;
    // Logic 
});

// Delete Comment
app.delete('/posts/:postId/comments/:commentId', (req, res) => {
    const postId = req.params.postId;
    const commentId = req.params.commentId;
    // Logic
});
