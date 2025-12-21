import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Portfolio API is running' });
});

// Routes
import contactRoutes from './routes/contactRoutes';
app.use('/api/contact', contactRoutes);

export default app;
