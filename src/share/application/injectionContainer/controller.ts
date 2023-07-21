import { controller } from "awilix-express";
import { type Express } from "express-serve-static-core";
import ConverterTimeController from "../../../modules/converter/application/controller/ConverterTimeController";
import GetTimezoneWorldTimeController from "../../../modules/worldTime/application/controllers/GetTimezoneWorldTimeController";
import GetWorldTimeController from "../../../modules/worldTime/application/controllers/GetWorldTimeController";

export const registerControllers = (app: Express): void => {
  app.use(controller(GetWorldTimeController));
  app.use(controller(GetTimezoneWorldTimeController));
  app.use(controller(ConverterTimeController));
};
