// Import necessary modules
import express, { Request, Response, NextFunction } from 'express';
//import { MongoClient } from 'mongodb';
import { userRoutes } from './routes/userRoutes';
import { authRoutes } from './routes/authRoutes';

// Initialize Express app
const app = express();
const port = 3000;

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/users', userRoutes);


// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


