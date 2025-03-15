const express = require("express");
const server = express();

server.use(express.json());

let customers = [
    {id: 1, name: "Dennaro Falcão", site: "https://www.instagram.com/dennaro__/"},
    {id: 2, name: "Google", site: "https://www.google.com"},
    {id: 3, name: "Youtube", site: "https://www.youtube.com/"},
];

server.get("/customers" , (req, res) =>{
    return req.json(customers);
});

server.get("/customers/:id", (req, res) =>{
    const id = parseInt(req.params.id);
    const customers = customers.find(item => item.id === id);
    const status = customers ? 200 : 404 ;

    console.debug("GET  : : /customers/:id" , customers );

    return res.status(status).json(customers);
});

server.post("/customers", (req, res) => {
    const {name, site} = req.body;
    const nextId = customers[customers.length - 1].id + 1;

    const newCustomers = {id, name, site};
    customers.push(newCustomers);

    return res.status(201).json(newCustomers);
});

server.put("/customers/:id", (req, res) => {
    const id = parseInt (req, res. id);
    const{ name, site} = req.body;

    const index = customers.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404;
    
    if (indez >= 0){
        customers [index] = {id: parseInt(id). name, site};
    }

    return res.status(status).json(customers[index]);
});

server.delete("/customers/id", (req, res) => {
    const id = parseInt (req, res. id);
    const index = customers.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if (index = 0){
        customers.splice(index, 1);
    }

    return res.status(status).json();
});

server.listen(3000);