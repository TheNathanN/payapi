import express from 'express';
import db from '../utils/database';

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, company, title, message } = req.body;

  try {
    console.log(req.body);
    const data = await db.addContact(name, email, company, title, message);
    res.status(201).send(data);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send('There was an issue submitting the form. Please try again.');
  }
});

export default router;
