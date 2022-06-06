import express, {Request, Response} from 'express';


const app = express();
app.use(express.json ());
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
    const category = {
        id:(categories.legth + 1),
        name: data.name,
        created_at: new Date (),
        updated_at: new Date()
    }
    categories.push(category);
    return response.json().status(200);
});

app.listen(3000, () =>{
    console.log ('servidor funcionando');
});