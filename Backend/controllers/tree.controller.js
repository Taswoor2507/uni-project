import AsyncHandler from "../utils/asyncHandler.js";
import QrCode from 'qrcode';
import Tree from "../models/tree.model.js";
const addTree = AsyncHandler(async (req, res, next) => {
  try {
    const { treeName, treeType, wateringSchedule, diseases, age, uses } = req.body;
    
    if (
      !treeName ||
      !treeType ||
      !wateringSchedule ||
      !diseases ||
      !age ||
      !uses
    ) {
      return res.status(400).json({ message: "Please provide all required fields" });
    }

    // Check if tree already exists in the database
    const existingTree = await Tree.findOne({
      treeName: { $regex: new RegExp(treeName, "i") },
    });
    if (existingTree) {
      return res.status(400).json({ message: "Tree already exists" });
    }

    // Create a new tree object
    const newTree = new Tree({
      treeName,
      treeType,
      wateringSchedule,
      diseases,
      age,
      uses,
    });

    // Generate QR code
    const qrCode = await QrCode.toDataURL(newTree._id.toString());
    
    // Set the qrCode field
    newTree.qrCode = qrCode;

    // Save the tree with the QR code
    await newTree.save();

    res.status(201).json(newTree);
  } catch (error) {
    next(error);
  }
});

export { addTree };
