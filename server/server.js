const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios')

const app = express();

const serverDeviations = [

];

const serverFacts = [

];

app.use(cors());
app.use(bodyParser.json())

app.post('/deviations', (req, res) => {

    serverDeviations.push(req.body.deviation);
    res.send(req.body);
    // console.log(serverDeviations)
});

app.delete('/deviations', (req, res) => {

    serverDeviations = []
    // console.log(serverDeviations)
});

app.get('/deviations', (req, res) => {
    res.send(serverDeviations);

});

app.get('/facts', (req, res) => {
    axios.get('http://numbersapi.com/random/trivia')
        .then((response)=> {
            console.log(response.data)
            serverFacts.push(req.body)
            res.send(response.data)
        })
        .catch((error)=>{
            res.send(error)
        })
})





app.listen(3002, () => {
    console.log('Server listening at port localhost:3002');
});
