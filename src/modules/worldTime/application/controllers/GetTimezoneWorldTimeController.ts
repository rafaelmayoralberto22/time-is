import { GET, route } from "awilix-express";
import { Request, Response } from "express";
import { type GetTimezoneWorldTimeUseCase } from "../../infrastructure/GetTimezoneWorldTimeUseCase";
import { GetTimezoneWorldTimeControllerProps } from "../../domain/models/GetTimezoneWorldTimeControllerProps";

@route("/world-timer")
export default class GetTimezoneWorldTimeController {
  #timezoneWorldTimeUseCase: GetTimezoneWorldTimeUseCase;

  constructor({
    timezoneWorldTimeUseCase,
  }: GetTimezoneWorldTimeControllerProps) {
    this.#timezoneWorldTimeUseCase = timezoneWorldTimeUseCase;
  }

  /**
   * @swagger
   * /world-timer/timezone:
   *    get:
   *     tags:
   *        - World Timer
   *     summary: World timer
   *     description: Use to request timezone
   *     responses:
   *       200:
   *         description: Return all time zones.
   *         schema:
   *            type: string[]
   */
  @route("/timezone")
  @GET()
  async run(req: Request, res: Response): Promise<void> {
    res.send(await this.#timezoneWorldTimeUseCase.run());
  }
}
