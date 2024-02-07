const mongoose = require("mongoose")
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  });
  
  const User = mongoose.model('User', userSchema);
  
  module.exports = User;
  
userSchema.pre('save', function(next) {
  if (!this.isModified('password')) {
    return next();
  }

  bcrypt.hash(this.password, 10, (err, hashedPassword) => {
    if (err) {
      return next(err);
    }
    this.password = hashedPassword;
    next();
  });
});

