// server/index.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

// 1. MIDDLEWARE
app.use(cors());
app.use(express.json());

// 2. MONGOOSE CONNECTION
// Note: If you want to specify a particular database name, add it after the slash:
// e.g. ...@cluster0.kgw54.mongodb.net/myPortfolioDB?retryWrites=true&w=majority
mongoose
  .connect('mongodb+srv://kazisakin:Myworkpass3695@cluster0.kgw54.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// 3. TEST ROUTE: READ FROM A "users" COLLECTION
app.get('/test-db', async (req, res) => {
  try {
    // If you haven't specified a database name, this connection might go to the "admin" DB by default.
    // You can still list or create collections, but we recommend specifying a DB name in the connection string.
    const result = await mongoose.connection.db.collection('users').findOne({});
    res.json(result || { message: 'No data found in "users" collection' });
  } catch (err) {
    console.error('Error reading from DB:', err);
    res.status(500).send('Database error');
  }
});

// 4. SAMPLE ROUTE: INSERT A USER
app.get('/create-user', async (req, res) => {
  try {
    const db = mongoose.connection.db;
    const newUser = { name: 'Alice', email: 'alice@example.com' };
    const insertResult = await db.collection('users').insertOne(newUser);
    res.json(insertResult);
  } catch (err) {
    console.error('Error inserting user:', err);
    res.status(500).send('Database error');
  }
});

// 5. BASIC ROUTE
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// 6. START SERVER
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
