//created and added in lesson8 pg.4 backendJS
const jwt = require("jsonwebtoken");
const models = require("../models/index");
const bcrypt = require("bcryptjs");

//signUser function for Admin status code for lesson 8 HandsOn - begin
module.exports = {
    signUser: function (user) {
        const token = jwt.sign({
                Username: user.Username,
                UserId: user.UserId,
                Admin: user.Admin
            },
            "secret", {
                expiresIn: "1h"
            }
        );
        return token;
    },
  }
//signUser function for Admin status code for lesson 8 HandsOn - begin

var authService = {
  signUser: function (user) {
    const token = jwt.sign(
      {
        Username: user.Username,
        UserId: user.UserId,
      },
      "secretkey",
      {
        expiresIn: "1h",
      }
    );
    return token;
  },
  //authentication service code that will validate the token - begin
  verifyUser: function (token) {
    //<--- receive JWT token as parameter
    try {
      let decoded = jwt.verify(token, "secretkey"); //<--- Decrypt token using same key used to encrypt
      return models.users.findByPk(decoded.UserId); //<--- Return result of database query as promise
    } catch (err) {
      console.log(err);
      return null;
    }
  },
  //authentication service code that will validate the token - end
  //function that will hash the password (takes in plain text password and returns a hashed version) - begin
hashPassword: function(plainTextPassword) {
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(plainTextPassword, salt);
  return hash;
},
comparePasswords: function (plainTextPassword, hashedPassword) {
  return bcrypt.compareSync(plainTextPassword, hashedPassword)
}
//function that will hash the password (takes in plain text password and returns a hashed version) - end

};

module.exports = authService;