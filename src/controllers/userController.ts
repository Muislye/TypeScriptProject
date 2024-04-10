import { Request, Response } from 'express';
import axios from 'axios';
import asyncRetry from 'async-retry';
import { User } from '../types/User';

const transformUserData = (user: any): User => {
  return {
    id: user.id,
    prefix: '', 
    firstName: user.name.split(' ')[0],
    lastName: user.name.split(' ')[1],
    email: user.email,
    address: `${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}`,
    geolocation: `(${user.address.geo.lat}, ${user.address.geo.lng})`,
    companyName: user.company.name
  };
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const userData = await asyncRetry(async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      return response.data;
    });

    const transformedUsers = userData.map(transformUserData);

    res.json(transformedUsers);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};