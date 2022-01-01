const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Servus');
});

app.listen(8080, "0.0.0.0", () => {
    console.log('Listening on port 8080');
});
