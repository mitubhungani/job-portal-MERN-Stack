const userDetailRepository = require("../repository/details");
exports.getUserDetails = async (userId) => {
  try {
    let user = await userDetailRepository.getByUserId(userId);
    return user;
  } catch (error) {
    throw new Error("Couldn't get user details for user " + userId);
  }
};
exports.createUserDetails = async (payload) => {
  try {
    let user = await userDetailRepository.createDetail(payload);
    return user;
  } catch (error) {
    throw new Error("Couldn't create user details for user " + req.user.id);
  }
};

exports.updateUserDetails = async (userId, payload) => {
  try {
    let user = await userDetailRepository.updateDetail(userId, payload);
    return user;
  } catch (error) {
    throw new Error("Couldn't update user details for user " + userId);
  }
};
