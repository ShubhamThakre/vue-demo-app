import express from "express";
import { clientSales } from "../data-source";

export default () => {
    const router = express.Router();

    router.get('/', (req, res) => {
        res.send(`Sales Router is up.`)
    })

    router.get('/records', async(req, res) => {
        try {
            const data: any = [];
            const query = {storeLocation: "Denver"};
            const cursor = await clientSales.find(query).limit(15);
            await cursor.forEach((recipe: any) => {
                data.push(recipe)
            });

            res.json({records: data})

        } catch (error) {
            console.log('sales data fetch error', error)
        }
        
    })

    return router;
}