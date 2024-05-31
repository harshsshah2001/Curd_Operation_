const express = require('express');
const mongoose = require('mongoose');
const connection = require('../conn');  // Ensure this establishes the connection to the database
const itemModel = require('../models/itemmodel');
const router = express.Router();

router.get('/item', (req, res) => {
    res.json('Items Successfully fetched');
});

module.exports = router;


