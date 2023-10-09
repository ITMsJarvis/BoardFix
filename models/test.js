const { Sequelize, DataTypes } = require("sequelize");
require('dotenv').config()
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: "dataBoards.sql",
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

const Boards = sequelize.define("repo", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING
    },
    stage: {
        type: DataTypes.INTEGER,
    },
}, { timestamps: false });

sequelize.sync()

module.exports = Boards;
