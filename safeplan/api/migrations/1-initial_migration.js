'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "safeplan_apps", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "initial_migration",
    "created": "2023-08-10T19:23:16.858Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "users",
        {
            "UserId": {
                "type": Sequelize.INTEGER,
                "field": "UserId"
            },
            "FirstName": {
                "type": Sequelize.STRING,
                "field": "FirstName"
            },
            "LastName": {
                "type": Sequelize.STRING,
                "field": "LastName"
            },
            "Username": {
                "type": Sequelize.STRING,
                "field": "Username"
            },
            "Password": {
                "type": Sequelize.STRING,
                "field": "Password"
            },
            "Email": {
                "type": Sequelize.STRING,
                "field": "Email"
            },
            "Admin": {
                "type": Sequelize.BOOLEAN,
                "field": "Admin"
            },
            "Deleted": {
                "type": Sequelize.BOOLEAN,
                "field": "Deleted"
            },
            "createdAt": {
                "type": Sequelize.DATE,
                "field": "createdAt",
                "allowNull": false
            },
            "updatedAt": {
                "type": Sequelize.DATE,
                "field": "updatedAt",
                "allowNull": false
            }
        },
        {}
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
