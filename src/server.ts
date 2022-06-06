import express, {Request, Response} from 'express';


const app = express();
const categories: any = [];

app.get('/', (request: Request, response: Response) => {
    return response.json({status:'success'}).status(200);
});

//get todas as categoriais
app.get('/categories', (request: Request , response: Response) =>{
    return response.json(categories).status(200);
});

app.post('/categories', (request: Request , response: Response) =>{
    const data = request.body;
    categories.push(data);
    return response.json().status(200);
});

app.listen(3000, () =>{
    console.log ('servidor funcionando');
});