module.exports = function (models) {
	models.users.hasMany(models.posts, {
		foreignKey: "UserId",
	});
	models.posts.belongsTo(models.users, {
		foreignKey: "UserId",
		targetKey: "UserId",
	});
};
// module.exports = function(models) {
//     models.posts.belongsToMany(models.users,
//     {
//         through: models.posts,
//         foreignKey: "UserId"
//     });
// }

// module.exports = function(models) {
//     models.users.hasMany(models.posts, {
//       foreignKey: "UserId"
//     });
//     models.posts.belongsTo(models.users, {
//       foreignKey: "UserId",
//       targetKey: "UserId"
//     });
//   };
