import express from 'express';
import Cards from './DatingCards.js';
import Cors from 'cors';
import { MongoClient } from 'mongodb';

const app = express();
const port = process.envPORT || 8080;
const connectionURL = `mongodb+srv://Illyra:Password2@cluster0.hxapb.mongodb.net/Cluster0?retryWrites=true&w=majority`;

app.use(express.json());
app.use(Cors());

app.get('/', (req, res) => {
    console.log("Hello world");
});



app.post('/signup', (req,res) => {
    res.json("Application filler");
});

app.get('/users', async(req, res) => {
    const client = new MongoClient(connectionURL)

    try {
        await client.connect()
        const database = client.db('Web-Dating-App')
        const users = database.collection('users')

        const returnUsers = await users.find().toArray();
        res.send(returnUsers)
    }
    finally {
        await client.close()
    }

})

//post
app.post('/Web-Dating-App/Cards', (req, res) => {
    const DatingCards = req.body;
    Cards.create(DatingCards, (err, data) => {
        if(err)
        {
            res.status(500).json(err);
        }
        else
        {
            res.status(201).json(data);
        }
    })
});

app.get('/cards', async(req, res) => {
    const client = new MongoClient(connectionURL)
    try {
        await client.connect()
        const database = client.db('Web-Dating-App')
        const users = database.collection('cards')

        const returnUsers = await users.find().toArray();
        res.send(returnUsers)
    }
    finally {
        await client.close()
    }
})


app.listen(port, () => console.log(`listening on localHost: ${port}`));