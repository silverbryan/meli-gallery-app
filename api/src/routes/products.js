require('dotenv').config();
const server = require("express").Router();

const { PATH_BASE } = process.env;


server.get('/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).json({ res: id });
});

module.exports = server;