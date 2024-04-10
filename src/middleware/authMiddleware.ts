import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authorize = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  const tokenParts = token.split(' ');
  if (!token) {
    return res
      .status(401)
      .json({ message: "Authorization token not provided" });
  }

  try {
    const decoded: any = jwt.verify(tokenParts[1], "secretKey");
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
