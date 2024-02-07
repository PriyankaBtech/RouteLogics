// Create Conversation
app.post('/conversations', (req, res) => {
    // Logic 
});

// Read Conversation
app.get('/conversations/:conversationId', (req, res) => {
    const conversationId = req.params.conversationId;
    // Logic 
});


// Delete Conversation
app.delete('/conversations/:conversationId', (req, res) => {
    const conversationId = req.params.conversationId;
    // Logic 
});