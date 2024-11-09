// Set up Mongoose
// and connect to the MongoDB database
const mongoose = require('mongoose');
mongoose.connect( 'mongodb://localhost:27017/User' )
// Must define a schema similar to what is
// in the database
const userSchema = new mongoose.Schema(
{ id: Number,
name: String,
occupation: String,
income: Number
}
);
// Then, must create a database model
const User = mongoose.model( 'User', userSchema );
// Query the database and display the result on the terminal only
async function findUsers() {
try {
// Fetch all users
const users = await User.find();
// Display the result in the terminal
console.log('Users:', users);
} catch (err) {
console.error(err);
} finally {
// Close the connection after query
mongoose.connection.close();
}
} // end findUsers() function
// Call the function to run the query
findUsers();

