const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

let messages = [];

app.get('/', (request, response) => {
    let message = messages[0];
    messages.shift();
    response.send(message);
});

app.post('/', (request, response) => {
    let message = request.body.message;
    if(messages.length <= 200){
        messages.push(message);
        response.send("Ok");
    }else{
        response.send("O limite de mensagens no servidor foi atingido, tente novamente mais tarde.");
    }
    
})
app.listen(process.env.PORT || 3000)