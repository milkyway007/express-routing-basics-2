const express = require('express');
const app = express();
const PORT = 4000;

app.get('/movies', (request, response) => {
    console.log(request.query.sort);
    console.log(request.query.page);

    response.send('[Movies]');
})

app.listen(PORT, () => {
    console.log('Server is running on PORT: ' + PORT);
});
