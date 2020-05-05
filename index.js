const Express = require('express');
const Cors = require('cors');
const Uuid = require('uuid/v1');

const app = Express();

const books = [
  { id: Uuid(), title: 'Fundação', author: 'Isaac Asimov' },
  { id: Uuid(), title: 'Prelúdio à Fundação', author: 'Isaac Asimov' },
];

app.use(Cors());

app.get('/ping', (req, res) => {
  res.send('readings api working');
});

app.get('/books', (req, res) => {
  res.json(books);
});

const port = 8000;
app.listen(port, () => {
  console.log(`started readings-api on port ${port}`);
});