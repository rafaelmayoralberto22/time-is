import { GET, route } from "awilix-express";
import { Request, Response } from "express";
import { GetWorldTimeUseCase } from "../../infrastructure/GetWorldTimeUseCase";

@route("/world-timer")
export default class GetWorldTimeController {
  #worldTimeUseCase: GetWorldTimeUseCase;

  constructor({ worldTimeUseCase }: { worldTimeUseCase: GetWorldTimeUseCase }) {
    this.#worldTimeUseCase = worldTimeUseCase;
  }

  @GET()
  async run(req: Request, res: Response) {
    const timezone = String(req.query?.zone ?? "");
    res.send(await this.#worldTimeUseCase.run(timezone));
  }
}
