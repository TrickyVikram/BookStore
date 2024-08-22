const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/books', bookRoutes);

// Error Handling Middleware (Optional)
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
