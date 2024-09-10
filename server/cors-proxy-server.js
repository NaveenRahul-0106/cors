const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 8082;

// Enable CORS for all routes
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/proxy', async (req, res) => {
    const targetUrl = req.query.url;
    
    if (!targetUrl) {
        return res.status(400).send('URL is required');
    }
    
    try {
        const response = await axios.get(targetUrl);
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data: ' + error.message);
    }
});

app.listen(port, () => {
    console.log(`CORS Proxy Server running at http://localhost:${port}`);
});
