const express = require('express'),
    app = express(),
    port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/api/test', (req, res) => {
    res.send({ express: '\n\nTesting the endpoint...\n\n'});
});