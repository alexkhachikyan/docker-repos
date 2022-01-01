const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379,
});

client.set('visits', 0);

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('Irrational number of visits ' + visits + ' times');
        client.set('visits', Math.exp(parseInt(visits)));
    });
});

app.listen(8081, "0.0.0.0", () => {
    console.log('listening on port 4001');
});
