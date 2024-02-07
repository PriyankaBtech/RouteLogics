// Create Group
app.post('/groups', (req, res) => {
    // Logic 
});

// Read Group
app.get('/groups/:groupId', (req, res) => {
    const groupId = req.params.groupId;
    // Logic 
});

// Update Group
app.put('/groups/:groupId', (req, res) => {
    const groupId = req.params.groupId;
    // Logic to update the group chat with the specified groupId
});

// Delete Group
app.delete('/groups/:groupId', (req, res) => {
    const groupId = req.params.groupId;
    // Logic to delete the group chat with the specified groupId
});


// Add Member to Group
app.post('/groups/:groupId/members', (req, res) => {
    const groupId = req.params.groupId;
    // Logic 
});

// Remove Member from Group
app.delete('/groups/:groupId/members/:userId', (req, res) => {
    const groupId = req.params.groupId;
    const userId = req.params.userId;
    // Logic to remove the member
});