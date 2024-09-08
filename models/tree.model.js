import mongoose from "mongoose";

// Define schema for trees
const treeSchema = mongoose.Schema(
  {
    treeType: {
      type: String,
      required: true,
    },
    treeName: {
      type: String,
      required: true,
    },
    wateringSchedule: {
      type: String,
      required: true,
    },
    diseases: [
      {
        type: String,
        required: true,
      },
    ],
    age: {
      type: Number,
      required: true,
    },
    uses: [
      {
        type: String,
        required: true,
      },
    ],
    // location: {
    //   type: String, // Could be latitude and longitude or a more descriptive format
    //   required: true,
    // },
    qrCode: {
      type: String, // To store the QR code string, which can be generated dynamically
      required: true,
    },
  },
  { timestamps: true } // Corrected to enable automatic timestamps
);

// Create the model
const Tree = mongoose.model("Tree", treeSchema);

export default Tree;
