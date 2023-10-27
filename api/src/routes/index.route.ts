import express from "express";
import Ping from './ping.route';
import Sales from './sales.route';

export default ({ }) => {
    const router = express.Router();

    router.use('/', Ping());

    router.use('/sales', Sales());

    return router;
}