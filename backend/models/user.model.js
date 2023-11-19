const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId;

const userSchema = new Schema(
  {
    _id: { type: objectId, auto: true },
    email: {
      type: String,
      required: [true, "Email is required"],
      // index: true,
      unique: true,
    },
    password: { type: String, required: [true, "Password is required"] },
    firstName: { type: String, required: [true, "First name is required"] },
    lastName: { type: String, default: null },
    isActive: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
