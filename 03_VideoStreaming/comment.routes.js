// Create Comment
app.post('/videos/:videoId/comments', (req, res) => {
    const videoId = req.params.videoId;
    // Logic
});

// Read Comment
app.get('/videos/:videoId/comments/:commentId', (req, res) => {
    const videoId = req.params.videoId;
    const commentId = req.params.commentId;
    // Logic 
});

// Update Comment
app.put('/videos/:videoId/comments/:commentId', (req, res) => {
    const videoId = req.params.videoId;
    const commentId = req.params.commentId;
    // Logic 
});

// Delete Comment
app.delete('/videos/:videoId/comments/:commentId', (req, res) => {
    const videoId = req.params.videoId;
    const commentId = req.params.commentId;
    // Logic 
});