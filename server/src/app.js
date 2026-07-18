const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const errorHandler = require("./middleware/errorHandler");
const testRoutes = require("./routes/test.routes");
const customerRoutes = require("./routes/customer.routes");
const setupRoutes = require("./modules/setup/setup.routes");
const authRoutes = require("./modules/auth/auth.routes");
const institutionRoutes = require("./modules/institutions/institution.routes");
// const institutionRoutes = require("./institution/index.js");
const path = require("path");
const fs = require("fs");

const app = express();

/*
|--------------------------------------------------------------------------
| Global Middlewares
|--------------------------------------------------------------------------
*/

app.use(
    cors({
        origin: true,
        credentials: true,
    })
);

app.use(
    helmet({
        crossOriginResourcePolicy: {
            policy: "cross-origin",
        },
    })
);

app.use(compression());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(morgan("dev"));


app.use("/api/test", testRoutes);

app.use("/api/customers", customerRoutes);

app.use("/api/setup", setupRoutes);

app.use("/api/auth", authRoutes);

app.use(
    "/api/institutions",
    institutionRoutes
);

app.use(
    "/uploads",
    express.static(
        path.join(process.cwd(), "uploads")
    )
);

/*
|--------------------------------------------------------------------------
| Health Check
|--------------------------------------------------------------------------
*/

app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "MargaVeda ERP API is running.",
        timestamp: new Date().toISOString(),
    });
});

app.use(errorHandler);

module.exports = app;