const express = require('express');
const Blockchain = require('./blockchain');
const app = express();
const port = 3000;

// Create blockchain instance
const myChain = new Blockchain(2);

// Middleware to allow frontend requests
app.use(require('cors')());
app.use(express.json());

// ✅ Serve index.html (and other static files)
app.use(express.static(__dirname));

// Route to view full blockchain
app.get('/chain', (req, res) => {
    res.send(myChain.chain);
});

// Route to mine a block
app.post('/mine', (req, res) => {
    const { data } = req.body;
    myChain.addBlock(data);
    res.send(myChain.chain);
});

app.listen(port, () => console.log(`🚀 Server running at http://localhost:${port}`));
