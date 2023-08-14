const express = require('express');
const app = express();
const PORT = 3000;

// Define route for the home page
app.get('/', (req, res) => {
    res.send(`
        <h1>99 Bottles of Beer on the Wall</h1>
        <a href="/98">Take one down, pass it around</a>
    `);
});

// Define route for a specific number of bottles
app.get('/:number_of_bottles', (req, res) => {
    const bottles = parseInt(req.params.number_of_bottles);
    const nextBottles = bottles - 1;

    let link = '';
    if (nextBottles > 0) {
        link = `<a href="/${nextBottles}">Take one down, pass it around</a>`;
    }

    const startOverLink = `<a href="/">Start over</a>`;

    res.send(`
        <h1>${bottles} Bottles of Beer on the Wall</h1>
        ${link}
        ${startOverLink}
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});