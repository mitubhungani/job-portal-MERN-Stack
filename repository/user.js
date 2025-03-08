const User = require("../model/user");

exports.register = async (data) => {
  let user = await User.create(data);
  return user;
};

exports.getUserByEmail = async (email) => {
  let user = await User.findOne({ email: email });
  // console.log("log",user);

  return user;
};

exports.getUserById = async (id) => {
  let user = await User.findById(id);
  return user;
};

exports.updateUser = async (id, userdata) => {
  let user = await User.findByIdAndUpdate(id, userdata, { new: true });
  return user;
};

exports.deleteUser = async (id) => {
  let user = await User.findByIdAndDelete(
    id,
    { isActive: false },
    { new: true }
  );
  return user;
};
exports.getUser = async (id) => {
  let user = await User.find();
  return user;
};

exports.getUserByQuery = async (query) => {
  let user = await User.find(query);
  return user;
};