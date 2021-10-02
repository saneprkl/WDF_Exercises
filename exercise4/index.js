const express = require('express')
const app = express()
const port = 3000
const { v4: uuidv4 } = require('uuid');

let items = [{
    id: uuidv4(),
    name: 'Some Cpu',
    type: 'Cpu',
    brand: 'Intel',
    price: 400
},
{   id: uuidv4(),
    name: 'Another Cpu',
    type: 'Cpu',
    brand: 'AMD',
    price: 200
},
{
    id: uuidv4(),
    name: "Some graphics card",
    type: "Gpu",
    brand: "AMD",
    price: 1200
},
{
    id: uuidv4(),
    name: "Another graphics card",
    type: "Gpu",
    brand: "Nvidia",
    price: 1500
}]

let users = [
{
    id: 'default',
    name: 'Santeri',
    lastName: 'Lehtonen',
    address: 'Torikatu 1',
    city: 'Oulu',
    postalCode: 90100,
    invoices: []
}]

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hello world')
});

//show all items
app.get('/items', (req, res) => {
    res.json(items);
})

//show an item based on id
app.get('/items/:id', (req, res) => {
    const result = items.find(i => i.id === req.params.id);
    res.json(result);
})

//search a brand or type of item (for example; http://localhost:3000/cpu or http://localhost:3000/gPu)
app.get('/:search', (req, res) => {
    console.log(req.params);
    searchResult = [];
    for(let i = 0; i < items.length; i++) {
        if(items[i].type.toLowerCase() === req.params.search.toLowerCase()) {
            searchResult.push(items[i]);
        }
        if(items[i].brand.toLowerCase() === req.params.search.toLowerCase()) {
            searchResult.push(items[i]);
        }
    }
    res.json(searchResult);
})

//add an item
app.post('/items', (req, res) => {
    res.send('New item created');
    items.push({
        id: uuidv4(),
        name: req.body.name,
        type: req.body.type,
        brand: req.body.brand,
        price: req.body.price
    })
    console.log(req.body);
})

//delete an item
app.delete('/items/:id', (req, res) => {
    const result = items.findIndex(i => i.id === req.params.id);
    if(result !== -1) {
        items.splice(result, 1);
        res.send('Item deleted');
    }   else {
        res.send('No such item found');
    }
})

//modify an item
app.put('/items/:id', (req, res) => {
    let result = items.find(i => i.id === req.params.id);

    result.name = req.body.name;
    result.type = req.body.type;
    result.brand = req.body.brand;
    result.price = req.body.price;
    res.send('Item modified');
})

//delete all items
app.delete('/items', (req, res) => {
    items = [];
    res.send('All items deleted');
})

app.listen(port, () => {
    console.log(`Listening port at http://localhost:${port}`)
})

// Stuff for user
// get users
app.get('/users', (req, res) => {
    res.json(users);
})

//add an invoice
app.post('/users/:id', (req, res) => {
    let result = users.find(i=> i.id === req.params.id);
    let findName = result.invoices.find(i => i.name === req.body.name);
    if (result.invoices.find(i => i.name === req.body.name)) {
        findName.qty++;
        findName.price = findName.price + req.body.price;
        res.send('item exist already');
    }
        
    else {
    result.invoices.push({
        id: uuidv4(),
        name: req.body.name,
        type: req.body.type,
        brand: req.body.brand,
        price: req.body.price,
        qty: 1,
        pricePerUnit: req.body.price
    })
    res.send('Product added to cart');
    }
    
})

//delete a single invoice
app.delete('/invoices/:id', (req, res) => {
    const user = users.find(i => i.id === 'default');
    const result = user.invoices.findIndex(i => i.id === req.params.id);
    if(result !== -1) {
        correct = user.invoices.find(i => i.id === req.params.id && i.qty > 1)
        if (user.invoices.find(i => i.id === req.params.id && i.qty > 1)) {
            correct.qty--;
            correct.price = correct.price - correct.pricePerUnit;
            res.send('One item removed');
        } else {
        user.invoices.splice(result, 1);
        res.send('Item deleted');
        }
    } else {
        res.send('No such item found');
    }
})

//delete all invoices
app.delete('/invoices', (req, res) => {
    const user = users.find(i => i.id === 'default');
    user.invoices = [];
    res.send('All invoices deleted');
})

//get all invoices
app.get('/invoices', (req, res) => {
    const result = users.find(i => i.id === 'default');
    res.json(result.invoices);
})

//get a single invoice
app.get('/invoices/:id', (req, res) => {
    const user = users.find(i => i.id === 'default');
    const result = user.invoices.find(i => i.id === req.params.id);
    res.json(result);
})

// final invoice
app.get('/checkout', (req, res) => {
    const user = users.find(i => i.id === 'default');
    let price = 0;
    let totalQty = 0;
    let checkout = [];
    for(let i = 0; i < user.invoices.length; i++) {
        price = price + user.invoices[i].price;
        totalQty = totalQty + user.invoices[i].qty;
    }
    checkout.push('total sum of purchase: ' + price + ' €', 'total amount of items: ' + totalQty);
    checkout.push(user.invoices);
    res.json(checkout);
})