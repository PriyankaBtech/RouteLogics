// Follow/Unfollow User
app.post('/users/:userId/follow', (req, res) => {
    const userId = req.params.userId;
    // Logic to follow the user with the specified userId
});

app.post('/users/:userId/unfollow', (req, res) => {
    const userId = req.params.userId;
    // Logic to unfollow the user with the specified userId
});