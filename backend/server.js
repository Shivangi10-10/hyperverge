const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const dbURI = "mongodb+srv://shivangisuyash8:ibDwnhtRzyJseYcR@cluster0.gj6yjfn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Failed to connect to MongoDB', err));

// Announcement Schema
const announcementSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Announcement = mongoose.model('Announcement', announcementSchema);

// Routes
app.get('/api/announcements', async (req, res) => {
    try {
        const announcements = await Announcement.find();
        res.status(200).json(announcements);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch announcements', error });
    }
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
