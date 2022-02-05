import express from 'express';
import cors from 'cors';
import contactForm from './pages/contactForm';
import demoForm from './pages/demoForm';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/demoForm', demoForm);
app.use('/contactForm', contactForm);

app.listen(port, () => console.log(`Server running on port ${port}`));
