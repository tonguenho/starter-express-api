const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(cors({
    origin: "*",
}))

app.use(express.json());

let messages = [{message: "conectado"}, {message: ""}];

app.get('/', (request, response) => {
    let message = messages[0];
    messages.shift();
    response.json(message);
});

app.post('/', (request, response) => {
    let message = request.body;
    if(messages.length <= 200){
        messages.push(message);
        response.send(`Ok ${messages}`);
    }else{
        response.send("O limite de mensagens no servidor foi atingido, tente novamente mais tarde.");
    }
    
})
app.listen(process.env.PORT || 3000)