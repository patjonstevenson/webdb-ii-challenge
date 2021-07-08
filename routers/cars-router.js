const router = require("express").Router();
const db = require("../data/cars/dbConfig");

router.get("/", async (req, res) => {
    try {
        const cars = await db.select('*').from('cars');
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({ message: "Internal server error while fetching cars." });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const car = await db.select('*').from('cars').where({ id: req.params.id });
        if (!car.length) { res.status(404).json({ message: "Car at given id not found." }) };
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({ message: "Internal server error while fetching car." });
    }
});

router.post("/", async (req, res) => {
    const body = req.body;
    if (!body) { res.status(400).json({ message: "Error: Body required for post." }) }
    try {
        const newId = await db.insert(req.body, 'id').into('cars');
        res.status(201).json(newId);
    } catch (error) {
        res.status(500).json({ message: "Internal server error while attempting to add car." });
    }
});

router.put("/:id", async (req, res) => {
    const changes = req.body;
    if (!changes) { res.status(400).json({ message: "Error: Body required for put." }) }
    try {
        const count = await db
            .where({ id: req.params.id })
            .update(changes)
            .into('cars');
        res.status(200).json(count);
    } catch (error) {
        res.status(500).json({ message: "Internal server error while updating car." });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const count = await db('cars').where({ id: req.params.id }).del();
        if (!count) { res.status(404).json({ message: "Could not find the car to delete." }) }
        res.status(200).json(count);
    } catch (error) {
        res.status(500).json({ message: "Internal server error when deleting car." })
    }
});

module.exports = router;