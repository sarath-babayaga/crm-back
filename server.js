// const express = require('express')
// const mongoose = require('mongoose')

// const app = express()
// mongoose.connect("mongodb+srv://sarathblu1996:qZizDkRxkFxUVbLW@new-crm.linq8q7.mongodb.net/")

// app.get("/api", (req, res) => {
//     res.json({"users": ["userOne", "userTwo", "userThree"]})
// })

// app.listen(5000, ()=>{
//     console.log("listening on port 5000")
// })


const express = require('express');
const mongoose = require('mongoose');

// MongoDB Atlas connection string
const connectionString = 'mongodb+srv://sarathblu1996:qZizDkRxkFxUVbLW@new-crm.linq8q7.mongodb.net/';

// Connect to MongoDB Atlas
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB Atlas:', error);
  });

// Create Express app
const app = express();

// Define routes or middleware here

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
