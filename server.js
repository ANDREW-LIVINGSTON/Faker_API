const express = require("express");
const cors = require("cors");
const port = 8000;
const app = new express();
var faker = require('faker');


app.use(cors());
app.use(express.json());

class User {
    constructor(){
        this.firstName = faker.name.firstName(); 
        this.lastName = faker.name.lastName(); 
        this.phoneNumber = faker.phone.phoneNumber(); 
        this.email = faker.internet.email(); 
        this.password = faker.internet.password();
    }
} 
    


class Company{
    constructor(){
        this._id = faker.datatype.number();
        this.name = faker.company.companyName(); 
        this.address = {
            street:faker.address.streetName(), 
            city:faker.address.city(), 
            state:faker.address.state(), 
            zipCode:faker.address.zipCode(), 
            country:faker.address.country()
        }
    }
} 
    


app.get("/api/hello", (req, res)=> {
    res.json({message: "hello world!"});
})

app.get("/api/users/new", (req, res)=>{
    const user1 = new User();
    
    return res.json({result: user1})
})

app.get("/api/companies/new", (req, res)=>{
    const company1 = new Company;
    
     return res.json({result: company1})
})

app.get("/api/user/company", (req, res)=>{
    const user1 = new User;
    const company1 = new Company;
    
    res.json({result: user1, company1})
})

app.listen(port, ()=>console.log(`Listening on port ${port}`));