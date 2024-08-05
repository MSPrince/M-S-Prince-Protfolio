import express from "express";
import {
    deleteMessage,
    getAllMessages,
  sendMessage
} from "../controller/messageController.js";

const router = express.Router();

router.post("/send", sendMessage);
router.delete("/delete/:id",  deleteMessage);
router.get("/getall",  getAllMessages);

export default router;
