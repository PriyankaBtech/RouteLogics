// Create Video
app.post('/videos', (req, res) => {
    // Logic to upload and create a new video
});

// Read Video
app.get('/videos/:videoId', (req, res) => {
    const videoId = req.params.videoId;
    // Logic
});

// Update Video
app.put('/videos/:videoId', (req, res) => {
    const videoId = req.params.videoId;
    // Logic 
});

// Delete Video
app.delete('/videos/:videoId', (req, res) => {
    const videoId = req.params.videoId;
    // Logic 
});


/************************************************/

// Video Views Tracking
app.post('/videos/:videoId/views', (req, res) => {
    const videoId = req.params.videoId;
    // Logic to track and record a view for the video with the specified videoId
});
