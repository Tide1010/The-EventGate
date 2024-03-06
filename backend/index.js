const cors = require('cors');   
const express = require('express');
const stripe = require('stripe')("sk_test_51OSgppSGnD25thwrddRgOV0G6SNWdhvyvz1bIUeYhqc5Fac6kSOlFSHeqJNW4smy4R2nl3Oj4TTpZZ1JsnnCVmKJ00yL3Rds8I")
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 3001;

//middleware
app.use(express.json());
app.use(cors());

//routes
app.get('/', (req, res) => {
    res.send('The backend is working well and the port is running on localhost:3001');   
})

app.post('/payments', (req, res) => {
    const {product, token} = req.body;
    console.log("Product: ", product + "&" + "Price: ", product.price);
    const idempotencyKey = uuid();

    return stripe.customers.create({
        email: token.email,
        source: token.id
    }).then(customer => {
        stripe.charges.create({
            amount: product.price * 100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email,
            description: product.name,
            shipping:{
                name: token.card.name,
                address:{
                    country: token.card.address_country
                }
            }
        },{idempotencyKey})
    }).then(result => {res.status(200).json(result)}).catch(error => console.log(error));
})
//Listen
app.listen(port, ()=>{console.log(`Server is running on port ${port} and everything is working well.`)});