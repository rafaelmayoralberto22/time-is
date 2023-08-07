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

  /**
   * @swagger
   * /converter:
   *    post:
   *      tags:
   *        - Converter
   *      summary: Converter
   *      description: Use to request value of timezone
   *      requestBody:
   *        description: Converter info
   *        required: true
   *        content:
   *            application/json:
   *                schema:
   *                  $ref: '#/components/schemas/Converter'
   *      responses:
   *        200:
   *          description: Return a valid date.
   *          content:
   *              application/json:
   *                  schema:
   *                      type: string
   *
   */
  @POST()
  async run(req: Request, res: Response): Promise<void> {
    const { body } = req;
    res.send(await this.#converterTimeUseCase.run(body));
  }
}
