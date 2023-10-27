const base = '';
const env = process.env;


export default {
    url: {
        base,
    },
    env: {
        database: {
            username: env.DB_USERNAME,
            password: env.DB_PASSWORD,
        }
    }
};