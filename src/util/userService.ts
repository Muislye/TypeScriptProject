import axios from "axios";
import asyncRetry from "async-retry";
import { User } from '../types/User'
import { transformUserData } from "../util/userUtils"

export const getUsers = async () => {
    try {
      const userData = await asyncRetry(async () => {
        const response = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        return response.data;
      });
  
      const transformedUsers = userData.map(transformUserData);
      return transformedUsers;
    } catch (error) {
      throw new Error("Internal Server Error");
    }
  };