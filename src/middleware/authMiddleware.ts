import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authorize = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res
      .status(401)
      .json({ message: "Authorization token not provided" });
  }

  try {
    const decoded: any = jwt.verify(token, "secretKey");
    console.log(decoded)
    if (decoded.userId && decoded.userRole === "ADMIN") {
      next();
    } else {
      res.status(403).json({ message: "Unauthorized access" });
    }
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};