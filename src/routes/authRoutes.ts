import express from 'express';
import jwt from 'jsonwebtoken';

export const authRoutes = express.Router();

authRoutes.post('/token', async (req, res) => {
  try {    
    const { userId, userRole } = req.body;

    if (!userId || !userRole) {
      return res.status(400).json({ message: 'userId and userRole are required' });
    }

    // Define payload
    const payload = {
      userId,
      userRole
    };

    // Define secret key
    const secretKey = 'secretKey';

    // Generate JWT token
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Token expires in 1 hour

    res.json({ token });
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ message: 'Internal Server Error' });
  }
});