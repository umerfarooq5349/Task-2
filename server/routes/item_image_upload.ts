import Express from "express";
import { uploadImage } from "./../controllers/item_image_upload_controller";
const item_image_upload_router = Express.Router();

item_image_upload_router.route("/").post(uploadImage);

export default item_image_upload_router;
