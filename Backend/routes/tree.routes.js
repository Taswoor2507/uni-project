import express from 'express'
import { addTree, getAllTrees, getTree } from '../controllers/tree.controller.js';
const router = express.Router();

router.route("/tree/create").post(addTree)
router.route("/tree/all").get(getAllTrees)
router.route("/tree/:id").get(getTree)

export default router;