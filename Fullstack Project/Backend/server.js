const express = require('express');
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require("./routes/userRoutes");
const cors = require('cors');
const path = require('path');

const app = express();
dotEnv.config();

const PORT = process.env.PORT || 5600;

// Serve static files from Frontend folder
app.use(express.static(path.join(__dirname, '../Frontend')));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo DB connected successfully"))
  .catch(error => console.log("Error: ", error));

app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server started at port number ${PORT}`);
});
