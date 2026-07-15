require("dotenv").config();

const app = require("./app");
const env = require("./config/env");
const connectDatabase = require("./database/connectDatabase");

const start = async () => {
    await connectDatabase();

    app.listen(env.PORT, () => {
        console.log(`
========================================
🚀 MargaVeda ERP Started
🌍 Environment : ${env.NODE_ENV}
📡 Port        : ${env.PORT}
========================================
`);
    });
};

start();