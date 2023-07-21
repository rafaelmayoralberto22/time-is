import { POST, route } from "awilix-express";
import { Request, Response } from "express";
import { type ConverterTimeControllerProps } from "../../domain/models/ConverterTimeControllerProps";
import { type ConverterTimeUseCase } from "../../infastructure/ConverterTimeUseCase";

@route("/converter")
export default class ConverterTimeController {
  #converterTimeUseCase: ConverterTimeUseCase;

  constructor({ converterTimeUseCase }: ConverterTimeControllerProps) {
    this.#converterTimeUseCase = converterTimeUseCase;
  }

  @POST()
  async run(req: Request, res: Response): Promise<void> {
    const { body } = req;
    res.send(await this.#converterTimeUseCase.run(body));
  }
}
