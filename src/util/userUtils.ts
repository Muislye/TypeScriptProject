import { User } from '../types/User'
import axios from "axios";
import asyncRetry from "async-retry";

export const transformUserData = (user: User): User => {
    const nameParts = user.name.split(" ");
    const firstName = nameParts.shift() ?? '';
    const lastName = nameParts.join(" "); 
  
    return {
      id: user.id,
      name: user.name,
      firstName,
      lastName, 
      email: user.email,
      address: user.address,
      company: user.company
    };
  };
