//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();

const fs = require('fs');
const path = require('path');

router.get('/', (req, res, next) => {
    const p = path.join(__dirname, '..', 'data', 'items.json');
    fs.readFile(p, (err, data) => {
        const products = JSON.parse(data);

        res.render('pages/ta03', {
            title: 'Team Activity 03',
            path: '/ta03', // For pug, EJS
            products: products,
            activeTA03: true, // For HBS
            contentCSS: true, // For HBS
        });
    })
});

module.exports = router;