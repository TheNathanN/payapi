import express from 'express';
import db from '../utils/database';

const router = express.Router();

router.post('/', async (req, res) => {
  console.log(req.body);
  const { email } = req.body;

  try {
    const data = await db.addDemo(email);
    res.status(201).send(data);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send('There was an issue submitting the form. Please try again.');
  }
});

export default router;
