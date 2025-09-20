const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
    // Đây là khóa ngoại trỏ đến Supplier
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier", // tham chiếu model Supplier
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
