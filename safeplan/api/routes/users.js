var express = require("express");
var router = express.Router();
var models = require("../models"); //<--- Add models
//var auth = require('../services/auth'); //<--- Add authentication service
var authService = require("../services/auth"); //added when bcrypt is used/required if there is not already an authService requirement

/* GET users listing. */
router.get("/", function (req, res, next) {
	res.send("respond with a resource");
});

// get signup begin
router.get("/signup", function (req, res, next) {
	res.render("signup");
});
//get signup end

// Create new user if one doesn't exist
router.post("/signup", function (req, res, next) {
	models.users
		.findOrCreate({
			where: {
				Username: req.body.username,
			},
			defaults: {
				FirstName: req.body.firstName,
				LastName: req.body.lastName,
				Email: req.body.email,
				Admin: req.body.Admin, //for the Hands On once we added the Admin column but NOTE that if we add the Admin this way through Postman it is
				//cont... less secure so it is best practice to just add the Admin status manually through SQL database
				//Password: req.body.password <--- use this when not using bCrypt to has the password
				Password: authService.hashPassword(req.body.password), //<--- use this when using bCrypt to hash the password
			},
		})
		.spread(function (result, created) {
			if (created) {
				res.redirect("Login");
			} else {
				res.send("This user already exists");
			}
		});
});

//Login get route - begin
router.get("/Login", function (req, res, next) {
	res.render("Login");
});
//Login get route - end

// Login user and return JWT as cookie <--- use this code prior to implementing the comparePasswords() and compareSync() - begin
// router.post('/Login', function (req, res, next) {
//   models.users.findOne({
//     where: {
//       Username: req.body.username,
//       Password: req.body.password
//     }
//   }).then(user => {
//     if (!user) {
//       console.log('User not found')
//       return res.status(401).json({
//         message: "Login Failed"
//       });
//     }
//     if (user) {
//       let token = authService.signUser(user); // <--- Uses the authService to create jwt token
//       res.cookie('jwt', token); // <--- Adds token to response as a cookie
//       res.send('Login successful');
//     } else {
//       console.log('Wrong password');
//       res.redirect('Login')
//     }
//   });
// });
// Login user and return JWT as cookie <--- use this code prior to implementing the comparePasswords() and compareSync() - end

// Login user and return JWT as cookie <--- use this code TO IMPLEMENT the comparePasswords() and compareSync() - begin
router.post("/Login", function (req, res, next) {
	models.users
		.findOne({
			where: {
				Username: req.body.username,
			},
		})
		.then((user) => {
			if (!user) {
				console.log("User not found");
				return res.status(401).json({
					message: "Login Failed",
				});
			} else {
				let passwordMatch = authService.comparePasswords(
					req.body.password,
					user.Password
				);
				if (passwordMatch) {
					let token = authService.signUser(user);
					res.cookie("jwt", token);
					res.redirect("profile");
				} else {
					console.log("Wrong password");
					res.send("Wrong password");
				}
			}
		});
});
// Login user and return JWT as cookie <--- use this code TO IMPLEMENT the comparePasswords() and compareSync() - end

//secure profile routes get profile - begin
// router.get('/profile', function (req, res, next) {
//   let token = req.cookies.jwt;
//   authService.verifyUser(token)
//     .then(user => {
//       if (user) {
//         res.send(JSON.stringify(user));
//       } else {
//         res.status(401);
//         res.send('Must be logged in');
//       }
//     })
// });
//secure profile routes get profile - end

//logout get route cookie response get route (set to null instead of token) - begin
router.get("/logout", function (req, res, next) {
	res.cookie("jwt", "", { expires: new Date(0) });
	res.redirect("Login");
	// res.send("Logged out");
});
//logout get route cookie response get route (set to null instead of token) - end

//logout profile get route - begin
router.get("/profile", function (req, res, next) {
	let token = req.cookies.jwt;
	if (token) {
		authService.verifyUser(token).then((user) => {
			if (user) {
				models.users
					.findAll({
						where: { UserId: user.UserId },
						include: [{ model: models.posts }],
					})
					.then((result) => {
						console.log(result);
						res.render("profile", { user: result[0] });
					});
			} else {
				res.status(401);
				res.send("Invalid authentication token");
			}
		});
	} else {
		res.status(401);
		res.send("Must be logged in");
	}
});
// router.get("/profile", function (req, res, next) {
//   let token = req.cookies.jwt;
//   if (token) {
//     authService.verifyUser(token).then((user) => {
//       if (user) {
//         res.send(JSON.stringify(user));
//       } else {
//         res.status(401);
//         res.send("Invalid authentication token");
//       }
//     });
//   } else {
//     res.status(401);
//     res.send("Must be logged in");
//   }
// });
//logout profile get route - end

//router get profile Id for lesson 8 Hands On - begin
router.get("/profile/:id", authService.verifyUser, function (req, res, next) {
	// if (!req.isAuthenticated()) {
	//   return res.send('You are not authenticated');
	// }
	if (req.params.id !== String(req.user.UserId)) {
		res.send("This is not your profile");
	} else {
		let status;
		if (req.user.Admin) {
			status = "Admin";
		} else {
			status = "Normal user";
		}

		res.render("profile", {
			FirstName: req.user.FirstName,
			LastName: req.user.LastName,
			Email: req.user.Email,
			UserId: req.user.UserId,
			Username: req.user.Username,
			Status: status,
		});
	}
});
//router get profile Id for lesson 8 Hands On - end
router.get("/Admin", function (req, res, next) {
	let token = req.cookies.jwt;
	if (token) {
		authService.verifyUser(token).then((user) => {
			if (user.Admin) {
				models.users
					.findAll({ where: { Deleted: false }, raw: true })
					.then((usersFound) => res.render("AdminView", { users: usersFound }));
			} else {
				res.send("unauthorized");
			}
		});
	}
});

router.get("/Admin/editUser/:id", function (req, res, next) {
	let userId = parseInt(req.params.id);
	let token = req.cookies.jwt;
	if (token) {
		authService.verifyUser(token).then((user) => {
			if (user.Admin) {
				models.users
					.findOne({ where: { UserId: userId }, raw: true })
					.then((user) => res.render("editUser", { user: user }));
			} else {
				res.send("unauthorized");
			}
		});
	}
});

router.delete("/Admin/editUser/:id", function (req, res, next) {
	let userId = parseInt(req.params.id);
	let token = req.cookies.jwt;
	if (token) {
		authService.verifyUser(token).then((user) => {
			if (user.Admin) {
				models.users
					.update({ Deleted: true }, { where: { UserId: userId }, raw: true })
					.then((user) => res.redirect("/users/Admin"));
			} else {
				res.send("unauthorized");
			}
		});
	}
});

module.exports = router;
// ORIGINAL CODE FROM EXPRESS PROJECT CREATION
// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
