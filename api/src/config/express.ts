import express from "express";
import http from "http";
import application from "../constants/application";
import indexRoute from "../routes/index.route";
import cors from 'cors';

export default () => {
    const app = express();

    app.use(express.static("public"));

    app.use(express.json());

    // Allowing cors 
    app.use(cors({
        origin: '*'
    }));

    // Headers 
    // app.use((req, res, next()) => {

    // })

    // Routers
    app.use(indexRoute({ }))

    return http.createServer(app);
}