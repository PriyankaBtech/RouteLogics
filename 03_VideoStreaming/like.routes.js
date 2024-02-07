// Create Like
app.post('/videos/:videoId/likes', (req, res) => {
    const videoId = req.params.videoId;
    // Logic
});

// Read Like
app.get('/videos/:videoId/likes/:likeId', (req, res) => {
    const videoId = req.params.videoId;
    const likeId = req.params.likeId;
    // Logic
});


// Delete Like
app.delete('/videos/:videoId/likes/:likeId', (req, res) => {
    const videoId = req.params.videoId;
    const likeId = req.params.likeId;
    // Logic
});