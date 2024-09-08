import express from 'express'
import { addTree } from '../controllers/tree.controller.js';
const router = express.Router();

router.route("/tree/create").post(addTree)

export default router;