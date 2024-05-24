import Express from "express";
import { uploadImage } from "./../controllers/item_image_upload_controller";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const uploadStorage = multer({ storage });

const item_image_upload_router = Express.Router();

item_image_upload_router
  .route("/")
  .post(uploadStorage.single("avatar"), uploadImage);

export default item_image_upload_router;
