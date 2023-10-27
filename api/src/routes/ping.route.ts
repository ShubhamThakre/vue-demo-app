import express from "express";

export default () => {
    const router = express.Router();

    router.get('/', (req, res) => {
        res.send(`Node JS server is up`)
    })

    return router;
}