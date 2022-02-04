import express from 'express';
import cors from 'cors';
import db from './database';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/contacts', async (req, res) => {
  try {
    const results = await db.viewAll();
    res.status(200).send(results);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

app.post('/api/add/:email', async (req, res) => {
  try {
    await db.addContact(req.params.email);
    res.status(201).send('Contact has been recieved');
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
