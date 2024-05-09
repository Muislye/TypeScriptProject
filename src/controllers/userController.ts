import { Request, Response } from "express";
import { getUsers } from "../util/userUtils";

export const getUsersFromApi = async (req: Request, res: Response) => {
  try {
    const transformedUsers = await getUsers();
    res.json(transformedUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
