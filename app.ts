/**
 * Required External Modules
 */
import express from "express";
import cors from "cors";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";

import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";

import { stationsRouter } from "./routes/routes";

import * as dotenv from "dotenv";

dotenv.config();

/**
 * App Variables
 */
if (!process.env.PORT) {
    process.exit(1);
}

const PORT = process.env.PORT as string || 7000;

const app = express();
const swaggerDocument = require('./swagger.json');

/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/docs',
        swaggerUi.serve,
        swaggerUi.setup(swaggerDocument));

app.use("/", stationsRouter);

app.use(errorHandler);
app.use(notFoundHandler);

/**
 * Server Activation
 */
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});