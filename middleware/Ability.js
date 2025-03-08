// const Ability = (roles = []) => {
//   return (req, res, next) => {
//     let role = req.user.role;
//     console.log("role",role);
    
//     if (roles.includes(role)) {
//       return next();
//     } else {
//       return res
//         .status(403)
//         .send({ message: "You do not have permission to access this" });
//     }
//   };
// };

// module.exports =Ability



const Ability = (roles = []) => {
  return (req, res, next) => {
    console.log("role", req.user);
    if (!req.user) {
      return res.status(401).send({ message: "Unauthorized: User not found" });
    }

    let role = req.user.role;

    if (roles.includes(role)) {
      return next();
    } else {
      return res
        .status(403)
        .send({ message: "You do not have permission to access this" });
    }
  };
};

module.exports = Ability;
