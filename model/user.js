const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    profile_picture: String,
    number: String,
    role: {
      type: String,
      eum: ["ADMIN", "HR", "CANDIDATE"],
      default: "CANDIDATE",
    },
    isActive: { type: Boolean, default: true },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
