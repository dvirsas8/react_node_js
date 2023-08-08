const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

const Data = require("./Data");
const data = new Data();

app.use(cors());
app.use(express.json());

app.listen(PORT, ()=> {
    console.log(`started listening on port ${PORT}`);
});

app.get('/', (req, res)=> {
    console.log("got request");
    res.json("hello");
}).post('/', (req, res, next)=> {
    let email = req.body.email;
    let password = req.body.password;
    if (data.addUser(email, password)) {
        res.send(true);
    }
    else {
        res.send(false);
    }
    console.log(data.users);
})

app.post('/login', (req, res, next)=> {
    let num = data.reply(req.body.email, req.body.password);
    console.log(data.users);
    res.send(num.toString());
})

app.post('/add', (req, res, next)=> {
    res.send(data.addFriends(req.body.email1, req.body.email2));
})

app.post('/check', (req, res, next)=> {
    if (!data.friends.has(req.body.email)) {
        res.send([]);
    }
    else {
        res.send(data.friends.get(req.body.email));
    }
})

app.put('/add/:email', (req, res)=> {
    const email = req.params.email;
    console.log(`user entered with email ${email}`);
})