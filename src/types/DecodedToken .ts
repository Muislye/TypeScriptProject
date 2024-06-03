import { JwtPayload } from "jsonwebtoken";

export interface DecodedToken extends JwtPayload {
  userId: string;
  userRole: string;
  // Add other properties if needed
}