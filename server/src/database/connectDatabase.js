const mongoose = require("mongoose");
const env = require("../config/env");

const connectDatabase = async () => {
    try {
        mongoose.set("strictQuery", true);

        const connection = await mongoose.connect(env.MONGO_URI);

        console.log(`
========================================
✅ MongoDB Connected
📂 Database : ${connection.connection.name}
🌍 Host     : ${connection.connection.host}
========================================
`);
    } catch (error) {
        console.error(`
========================================
❌ MongoDB Connection Failed
${error.message}
========================================
`);
        process.exit(1);
    }
};

module.exports = connectDatabase;