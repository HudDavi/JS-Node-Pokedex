import cors from 'cors';
import express, { Router } from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const router = Router();
 
app.use(cors(
  {
    origin: ['https://pokeapi.co/'],
    methods: ['GET'],
  }
));

router.get('/',function(_req,res){
  res.sendFile(join(__dirname+'/index.html'));
});

app.use(express.static(__dirname + '/public'));
app.use('/', router);
app.listen(process.env.port || 3000);
 
console.log('http://127.0.0.1:3000');