import express from 'express';
import { addFood, listFood, removeFood } from '../controllers/foodController.js';
import multer from 'multer';

const foodRouter = express.Router();

// Configure image storage - saves to uploads folder with timestamp
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null,`${Date.now()}${file.originalname}`); // Unique filename
    }
})

const upload = multer({ storage: storage})

// Food management routes
foodRouter.get("/list",listFood);
foodRouter.post("/add",upload.single('image'),addFood); // Handles image upload
foodRouter.post("/remove",removeFood);

export default foodRouter;