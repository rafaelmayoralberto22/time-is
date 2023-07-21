import { type BaseServiceProps } from "../../../../share/domain/BaseServiceProps";
import { type BaseService } from "../../../../share/application/service/BaseService";
import { HTTP_TIMEZONE_TIME } from "../../../../share/utils/constant";
import { convertKeysToCamelCase } from "../../../../share/utils/converters";
import { type IWorldTimeRepository } from "../../domain/interfaces/IWorldTimeRepository";
import { type WorldTime } from "../../domain/models/WorldTime";

export class WorldTimeRepository implements IWorldTimeRepository {
  #baseService: BaseService;

  constructor({ baseService }: BaseServiceProps) {
    this.#baseService = baseService;
  }

  async timezone(): Promise<string> {
    const response = await this.#baseService.fetch({
      url: HTTP_TIMEZONE_TIME,
    });
    const data = await response.json();
    return data;
  }

  async get(...params: string[]): Promise<WorldTime> {
    const response = await this.#baseService.fetch({
      url: `${HTTP_TIMEZONE_TIME}/${params.join("/")}`,
    });
    const data = await response.json();
    return convertKeysToCamelCase(data);
  }
}
