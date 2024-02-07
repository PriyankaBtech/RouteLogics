// Create Message
app.post('/conversations/:conversationId/messages', (req, res) => {
    const conversationId = req.params.conversationId;
    // Logic
});

// Read Message
app.get('/conversations/:conversationId/messages/:messageId', (req, res) => {
    const conversationId = req.params.conversationId;
    const messageId = req.params.messageId;
    // Logic 
});

// Delete Message
app.delete('/conversations/:conversationId/messages/:messageId', (req, res) => {
    const conversationId = req.params.conversationId;
    const messageId = req.params.messageId;
    // Logic
});