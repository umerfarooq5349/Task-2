import { Request, Response } from "express";
import multer from "multer";

export const uploadImage = (req: Request, res: Response) => {
  res.json({ status: "Item uploaded successfully" });
};
