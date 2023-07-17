import { createContainer } from "awilix";
import express, { Express, Request, Response } from "express";
import { controller, scopePerRequest } from "awilix-express";
import GetWorldTimeController from "./modules/worldTime/application/controllers/GetWorldTimeController";
import registerContext from "./share/application/injectionContainer/register";

const app: Express = express();
const port = 3000;

export const containerAwilix = createContainer();

app.use(scopePerRequest(containerAwilix));
app.use(controller(GetWorldTimeController));

registerContext(containerAwilix);

app.get("/", (req: Request, res: Response) => {
  res.send("Express Time API server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
