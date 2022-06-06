import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({status: 'success'}).status(200);
});

app.listen(3000, () =>{
    console.log ('servidor funcionando');
});