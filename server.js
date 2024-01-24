const express = require('express');
const app = express();
const path = require('path');

const PORT = 3001;

app.use(express.static(path.join(__dirname)));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
