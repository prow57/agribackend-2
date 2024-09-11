// index.js

const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

// Import the db and storage instances from db.js
const { db } = require('./db');

// Import route handlers
const courseRoutes = require('./src/routes/courseRoutes');
const adviceRoutes = require('./src/routes/adviceRoutes');
const chatRoutes = require('./src/routes/chatRoutes');
const authRoutes = require('./src/routes/authRoutes');
const otpRoutes = require('./src/routes/otpRoutes');
const cropRoutes = require('./src/routes/cropRoutes');
const courseRoutes = require('./src/routes/communityRoute.js');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes for Endpoints 
app.use('/api/verify', otpRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/advice', adviceRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/vision', cropRoutes);
app.use('/api/community', communityRoute);

// Default route
app.get('/', (req, res) => {
  res.send('Agri-Assist-AI Backend API is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
