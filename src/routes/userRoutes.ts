import express from "express";
import { getUsersFromApi } from "../controllers/userController";
import { authorize } from "../middleware/authMiddleware";

export const userRoutes = express.Router();

userRoutes.use(authorize);

userRoutes.get("/", getUsersFromApi);
