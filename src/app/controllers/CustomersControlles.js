
let customers = [
    {id: 1, name: "Dennaro Falcão", site: "https://www.instagram.com/dennaro__/"},
    {id: 2, name: "Google", site: "https://www.google.com"},
    {id: 3, name: "Youtube", site: "https://www.youtube.com/"},
];

class CustomersControlles{
    

    //Listagem dos Customers
    index(req, res){
        return req.json(customers);
    }
    // Recupera um Customer
    show(req, res){
        const id = parseInt(req.params.id);
        const customers = customers.find(item => item.id === id);
        const status = customers ? 200 : 404 ;

    console.debug("GET  : : /customers/:id" , customers );

    return res.status(status).json(customers);

    }
    //Cria um novo Customer
    create(req, res){
        const {name, site} = req.body;
        const nextId = customers[customers.length - 1].id + 1;
    
        const newCustomers = {id, name, site};
        customers.push(newCustomers);
    
        return res.status(201).json(newCustomers);
    }

    //Atualiza um Customer
    update(req, res){
        const id = parseInt (req, res. id);
        const{ name, site} = req.body;
    
        const index = customers.findIndex(item => item.id === id);
        const status = index >= 0 ? 200 : 404;
        
        if (indez >= 0){
            customers [index] = {id: parseInt(id). name, site};
        }
    
        return res.status(status).json(this.customers[index]);
    }

    //Exclui um Customer
    destroy(req, res){
        const id = parseInt (req, res. id);
        const index = customers.findIndex(item => item.id === id);
        const status = index >= 0 ? 200 : 404;
    
        if (index = 0){
            customers.splice(index, 1);
        }
    
        return res.status(status).json();
    }
}

export default new CustomersControlles();