import { GET, route } from "awilix-express";
import { Request, Response } from "express";
import { type GetWorldTimeControllerProps } from "../../domain/models/GetWorldTimeControllerProps";
import { type GetWorldTimeUseCase } from "../../infrastructure/GetWorldTimeUseCase";

@route("/world-timer")
export default class GetWorldTimeController {
  #worldTimeUseCase: GetWorldTimeUseCase;

  constructor({ worldTimeUseCase }: GetWorldTimeControllerProps) {
    this.#worldTimeUseCase = worldTimeUseCase;
  }

  /**
   * @swagger
   * /world-timer:
   *    get:
   *      tags:
   *        - World Timer
   *      summary: Timezone
   *      description: Use to request value of timezone
   *      parameters:
   *        - in: query
   *          name: zone
   *          type: string
   *          required: true
   *          description: Timezone
   *      responses:
   *        200:
   *          description: Return all time zones.
   *          content:
   *              application/json:
   *                  schema:
   *                      $ref: '#/components/schemas/WorldTime'
   *
   */
  @GET()
  async run(req: Request, res: Response): Promise<void> {
    const timezone = String(req.query?.zone ?? "");
    if (!timezone) {
      res.status(404).send("Timezone is required");
      return;
    }
    res.send(await this.#worldTimeUseCase.run(timezone));
  }
}
