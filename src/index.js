const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const authorController = require('./controllers/author.controller');
const bookController = require('./controllers/book.controller');
const sectionController = require('./controllers/section.controller');

const PORT = 8000;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/authors', authorController);
app.use('/books', bookController);
app.use('/sections', sectionController);

const db = 'mongodb+srv://shubham:iamamit@cluster0.mraab.mongodb.net/library?retryWrites=true&w=majority';

app.listen(PORT, async () => {
    console.log("Listening to port 8000");
    try {
        await mongoose.connect(db);
        console.log("Connected to DB");
    }
    catch(err) {
        console.log(err.message);
    }
})

