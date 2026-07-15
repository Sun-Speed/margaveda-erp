const { cleanEnv, str, port } = require("envalid");

const env = cleanEnv(process.env, {
    NODE_ENV: str({
        default: "development",
    }),

    PORT: port({
        default: 5000,
    }),

    MONGO_URI: str(),

    JWT_SECRET: str(),

    JWT_EXPIRES_IN: str({
        default: "7d",
    }),
});

module.exports = env;