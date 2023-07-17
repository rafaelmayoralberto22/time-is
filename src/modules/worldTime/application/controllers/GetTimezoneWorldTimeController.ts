import { GET, route } from "awilix-express";
import { Request, Response } from "express";
import { GetTimezoneWorldTimeUseCase } from "../../infrastructure/GetTimezoneWorldTimeUseCase";

@route("/world-timer")
export default class GetTimezoneWorldTimeController {
  #timezoneWorldTimeUseCase: GetTimezoneWorldTimeUseCase;

  constructor({
    timezoneWorldTimeUseCase,
  }: {
    timezoneWorldTimeUseCase: GetTimezoneWorldTimeUseCase;
  }) {
    this.#timezoneWorldTimeUseCase = timezoneWorldTimeUseCase;
  }

  @route("/timezone")
  @GET()
  async run(req: Request, res: Response) {
    res.send(await this.#timezoneWorldTimeUseCase.run());
  }
}
