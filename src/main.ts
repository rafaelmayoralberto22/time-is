import { createContainer } from "awilix";
import { scopePerRequest } from "awilix-express";
import express, { type Express, type Request, type Response } from "express";
import SwaggerJsdoc from "swagger-jsdoc";
import SwaggerUiExpress from "swagger-ui-express";
import { registerControllers } from "./share/application/injectionContainer/controller";
import registerContext from "./share/application/injectionContainer/register";
import { SWAGGER_OPTIONS } from "./share/utils/constant";

const app: Express = express();
const port = 3000;

export const containerAwilix = createContainer();

app.use(express.json());
app.use(scopePerRequest(containerAwilix));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const swaggerDoc = SwaggerJsdoc(SWAGGER_OPTIONS);
app.use("/docs", SwaggerUiExpress.serve, SwaggerUiExpress.setup(swaggerDoc));

registerContext(containerAwilix);
registerControllers(app);

app.get("/", (req: Request, res: Response) => {
  res.send("Express Time API server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
