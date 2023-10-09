const express = require('express');
const router = express.Router();
const Boards = require("../models/test")

let id = 1
router.post("/boards", async (req, res) => {
    let { title } = req.body
    if (title) {
        let createdObject = await Boards.create({
            id: id++, title: title, stage: 1
        })
        res.status(201).json(createdObject)
    }
});
router.put("/boards/:id", async (req, res) => {
    const { id } = req.params;
    const { stage } = req.body;
    const board = await Boards.findOne({
        where: {
            id: +id
        }
    });
    if (![1, 2, 3].includes(stage)) {
        return res.status(400).send();
    }

    board.stage = stage;
    await board.save();

    res.status(200).json({
        id: board.id,
        title: board.title,
        stage: board.stage,
    });
})
module.exports = router;
