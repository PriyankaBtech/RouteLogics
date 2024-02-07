// Create Booking
app.post('/bookings', (req, res) => {
    // Logic 
});

// Read Booking
app.get('/bookings/:bookingId', (req, res) => {
    const bookingId = req.params.bookingId;
    // Logic 
});

// Update Booking
app.put('/bookings/:bookingId', (req, res) => {
    const bookingId = req.params.bookingId;
    // Logic
});

// Delete Booking
app.delete('/bookings/:bookingId', (req, res) => {
    const bookingId = req.params.bookingId;
    // Logic 
});


// Booking Confirmation
app.get('/bookings/:bookingId/confirm', (req, res) => {
    const bookingId = req.params.bookingId;
    // Logic to confirm a booking
});

// Booking Cancellation
app.post('/bookings/:bookingId/cancel', (req, res) => {
    const bookingId = req.params.bookingId;
    // Logic to cancel a booking 
});