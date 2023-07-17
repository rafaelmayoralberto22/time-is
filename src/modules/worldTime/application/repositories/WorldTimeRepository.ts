import { HTTP_TIMEZONE_TIME } from "../../../../share/utils/constant";
import { BaseService } from "../../../../share/application/service/BaseService";
import { IWorldTimeRepository } from "../../domain/interfaces/IWorldTimeRepository";
import { convertKeysToCamelCase } from "../../../../share/utils/converters";

export class WorldTimeRepository implements IWorldTimeRepository {
  #baseService: BaseService;

  constructor({ baseService }: { baseService: BaseService }) {
    this.#baseService = baseService;
  }

  async get(...params: string[]): Promise<WorldTime> {
    const response = await this.#baseService.fetch({
      url: `${HTTP_TIMEZONE_TIME}${params.join("/")}`,
    });
    const data = await response.json();
    return convertKeysToCamelCase(data) as WorldTime;
  }
}
