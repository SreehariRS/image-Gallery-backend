import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import imageRoutes from './routes/imageRoutes';

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/auth', authRoutes);
app.use('/api/images', imageRoutes);

export default app;