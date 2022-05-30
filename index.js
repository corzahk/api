 
const express = require('express');
const app = express();

app.use(express.json());


app.get('/user', (req, res) =>{
    res.json({
        username: 'Cameron',
        lastname: 'Dias'
    });
});
app.post('/user/:id', (req, res) =>{
    console.log(req.body);
    console.log(req.params);

    res.send('Peticion POST');
});
app.put('/test', (req, res) =>{
    res.send('Peticion PUT');
});
app.delete('/contact', (req, res) =>{
    res.send('Peticion DELETE');
});
app.listen(5000, ()=> {
    console.log("Server on port 3000");
});