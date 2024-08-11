// db.js
const mongoose = require('mongoose');

// MongoDB connection URL
const mongoURI = 'mongodb+srv://shiva:1234@cluster0.eco4m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

module.exports = mongoose;
