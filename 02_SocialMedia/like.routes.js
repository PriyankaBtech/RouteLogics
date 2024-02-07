// Create Like
app.post('/posts/:postId/likes', (req, res) => {
    const postId = req.params.postId;
    // Logic 
});

// Read Like
app.get('/posts/:postId/likes/:likeId', (req, res) => {
    const postId = req.params.postId;
    const likeId = req.params.likeId;
    // Logic 
});


// Delete Like
app.delete('/posts/:postId/likes/:likeId', (req, res) => {
    const postId = req.params.postId;
    const likeId = req.params.likeId;
    // Logic
});
