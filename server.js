const { response } = require("express");
const express = require("express");
const express_app = express();
const port = 3000;
const drinks = require('./models/drinks.js');
const foods = require('./models/food.js')

express_app.get('/', (request, response) => {
    response.send('Welcome to the Gitpub App!')
})

express_app.get('/drinks', (request, response) => {
    // response.send(drinks)
    response.render("drinks_index.ejs", {drink: drinks, food: foods})
})

express_app.get('/drinks/:id', (request, response) => {
    //response.send(drinks[request.params.id])
    response.render("drinks_show.ejs", {drink: drinks[request.params.id]})
})

express_app.get('/foods/:id', (request, response) => {
    // response.send(drinks)
    response.render("food_show.ejs", {food: foods[request.params.id]})
})

express_app.listen(port, (request, response) => {
    console.log(`Now listening in on port ${port} and the server is now running`)
})