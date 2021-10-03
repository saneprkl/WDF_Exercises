const express = require('express')
const app = express()
const port = 4000
const data = require('./data.json');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

for(let i = 0; i < data.items.length; i++) {
  data.items[i].id = uuidv4();
}

app.get('/', (req, res) => {
  res.send('Server up')
})

app.get('/items', (req, res) => {
   res.json(data.items) 
})

app.post('/items', (req, res) => {
    res.send('New item created');
    items.push({
        id: uuidv4(),
        name: req.body.name,
        type: req.body.type,
        brand: req.body.brand,
        price: req.body.price,
        rating: req.body.rating,
        stock: req.body.stock
    });
    res.sendStatus(201);
});

app.delete('/items/:id', (req, res) => {
  const productIndex = data.items.findIndex(item => item.id === req.params.id);
  if(productIndex != -1) {
    data.items.splice(productIndex, 1);
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})