import { Request, Response } from "express";
import multer from "multer";

export const uploadImage = (req: Request, res: Response) => {
  const imageUrl = `http://localhost:8080/uploads/${req.file?.filename}`;
  res.status(200).json({
    status: "Item uploaded successfully",
    data: req.file,
    url: imageUrl,
  });
};
