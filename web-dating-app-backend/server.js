import express from 'express';
import mongoose from 'mongoose';
import Cards from './DatingCards.js';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';


const app = express();
const port = process.envPORT || 8080;
const connectionURL = `mongodb+srv://Illyra:Password2@cluster0.hxapb.mongodb.net/Web-Dating-App?retryWrites=true&w=majority`;

app.use(express.json());
app.use(cors());

mongoose.connect(connectionURL, err => {
    if(err) throw err;
    console.log('Connected to MongoDB');
});

//get
app.get('/', (req, res) => res.status(200).send('Hello World'));

app.post('/signup', async(req, res) => {
    const client = new MongoClient(connectionURL);
    const { email, Password } = req.body;

    const generateUserID = uuidv4();
    const hashedpassword = await bcrypt.hash(Password, 10); //hashed password

    try {
        await client.connect()
        const database = client.db('Web-Dating-App');
        const users = database.collection('users');
        const existingUser = await users.findOne({email});
        if (existingUser) {
            return res.status(409).send('User already exists. Use a different login');
        }

        const sanitizedEmail = email.toLowerCase()

        const data = {
            user_id: generateUserID,
            email: sanitizedEmail,
            hashed_password: hashedpassword
        }
        const insertUser = await users.insertOne(data)

        const authToken = jwt.sign(insertUser, sanitizedEmail, {
            expiresIn: 60 * 24,
        })
        res.status(201).json({authToken, userId: generateUserID, email: sanitizedEmail})
    }

    catch(err) {
        console.log(err);
    }
    finally {
        await client.close();
    }
});

app.post('/login', async(req, res) => {
    const client = new MongoClient(connectionURL);
    const { email, Password } = req.body;

    try {
        await client.connect()
        const database = client.db('Web-Dating-App');
        const users = database.collection('users');

        const person = await users.findOne({email});

        const positiveMatch = await bcrypt.compare(Password, person.hashed_password);

        if (person && positiveMatch) {
            const token = jwt.sign(person, email, {
                expiresIn: 60 * 24
            })
            res.status(201).json({ token, userId: person.user_id, email});
        }
        res.status(401).send('Invalid Login Info');
    }
    catch(err) {
        console.log(err)
    }

})

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
app.post('/web-dating-app/Cards', (req, res) => {
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

app.get('/web-dating-app/Cards', (req, res) => {
    Cards.find((err, data) => {
        if (err)
        {
            res.status(500).send(err);
        }
        else
        {
            res.status(200).send(data);
        }
    });
});


app.listen(port, () => console.log(`listening on localHost: ${port}`));