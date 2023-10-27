require('dotenv').config()
import AppDataSource from './data-source';
import express from './config/express';

const PORT = process.env.PORT || 4000

AppDataSource()
  .then(() => {
    const server = express();

    server.listen(PORT, () => {
      console.log(`[server]: Server is running at http://localhost:${PORT}`)
    });
  })
  .catch((error: Error) => {
    console.log(`Database connection failed with error ${error}`);
  })
