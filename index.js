const express = require('express');
const path = require('path');
const fs = require('fs');
const {marked} = require('marked');
const app = express();
const port = 10000;

app.use(express.json());

const cache = {};
const MAX_SIZE = 10;

app.post('/cache', (req, res) => {
    const { key, value } = req.body;
    if (Object.keys(cache).length >= MAX_SIZE) {
        return res.status(400).json({ error: 'Cache size limit reached' });
    }
    cache[key] = value;
    res.status(200).json({ message: 'Key-value pair stored successfully' });
});

app.get('/cache/:key', (req, res) => {
    const key = req.params.key;
    if (cache[key]) {
        return res.status(200).json({ value: cache[key] });
    }
    res.status(404).json({ error: 'Key not found' });
});

app.delete('/cache/:key', (req, res) => {
    const key = req.params.key;
    if (cache[key]) {
        delete cache[key];
        return res.status(200).json({ message: 'Key-value pair deleted successfully' });
    }
    res.status(404).json({ error: 'Key not found' });
});

app.get('/', (req, res) => {
    const readmePath = path.join(__dirname, 'README.md');
    fs.readFile(readmePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading README.md file');
        }
        const htmlContent = marked(data);
        res.send(htmlContent);
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});