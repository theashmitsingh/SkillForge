const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const database = require('./config/database');
database.connect();

const userRoutes = require('./routes/user');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/api/v1', userRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
})