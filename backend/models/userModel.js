const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A user must have a name"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "A user must have an email"],
    },
    password: {
      type: String,
      required: [true, "A user must have a password"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.methods.passwordVerify = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// userSchema.pre("findOneAndUpdate", async function (next) {
//   if (!this.isModified("password")) return next();

//   this.password = await bcrypt.hash(this.password, 12);
//   next();
// });

const User = mongoose.model("User", userSchema);

module.exports = User;
