const router = require("express").Router();

router.get("/", async (req, res) => {

});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    
});

router.post("/", async (req, res) => {
    const body = req.body;
    if (!body) { res.status(400).json({ message: "Error: Body required for post" }) }
    try {

    } catch (error) {
        res.status(500).json({message: "Internal server error while attempting to add car."});
    }
});

module.exports = router;