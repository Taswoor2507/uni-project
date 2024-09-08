import express from 'express'
import { addTree } from '../controllers/tree.controller.js';
const router = express.Router();

router.route("/tree/create").get(addTree)

export default router;