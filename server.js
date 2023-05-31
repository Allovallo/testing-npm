const express = require('express');

const app = express();

app.use('*', (req, res) => {
    console.log('Отримано запит від браузера');
    res.send('<h1>Це HTML тобі у відповідь</h1>')
});

const listener = app.listen(4444, () => {
    console.log(`Веб-сервер запущено на порті ${listener.address().port}`);
});
