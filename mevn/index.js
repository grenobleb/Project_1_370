// Import express, mongoose, cors
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors()); // Allow CORS for frontend access
app.use(express.json());
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/User')
// Define a schema
const userSchema =
new mongoose.Schema( {
id: Number,
name: String,
occupation: String,
income: Number
}
);
// Create a database model
const User = mongoose.model('User', userSchema);
// Query the database and display the result
app.get('/users', async ( req, res ) => {
try {
const users = await User.find({income:{$gt:30000},occupation:"professor"}); // Fetch all users
res.json(users); // Display the result in the frontend
} catch (err) {
res.status(500).json({ message: err.message });
}
}
);
// Start the server
app.listen( 5000, () => {
console.log('Server is running on port 5000');
}
);

