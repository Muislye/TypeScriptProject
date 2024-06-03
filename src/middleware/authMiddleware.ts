import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import {DecodedToken} from "../types/DecodedToken "

export const authorize = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res
      .status(401)
      .json({ message: "Authorization token not provided" });
  }

  const tokenParts = token.split(' ');
  if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
    return res
      .status(401)
      .json({ message: "Invalid authorization token format" });
  }

  try {
    const decoded = jwt.verify(tokenParts[1], "secretKey") as DecodedToken;
    if (decoded.userId && decoded.userRole === "ADMIN") {
      next();
    } else {
      res.status(403).json({ message: "Unauthorized access" });
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Invalid token" });
  }
};