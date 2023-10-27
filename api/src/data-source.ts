import application from "./constants/application";
const { MongoClient } = require("mongodb");

const uri = `mongodb+srv://${application.env.database.username}:${application.env.database.password}@cluster0.ptiuhje.mongodb.net/?retryWrites=true&w=majority`;

const dbName = "sample_supplies";
const collectionName = "sales";

const client = new MongoClient(uri);

export default async function () {
    try {
        await client.connect();
        console.log("Successfully connected to Atlas");
    } catch (err) {
        console.log(err);
    }
}

// Sales Database client
export const clientSales = client.db(dbName).collection(collectionName);
