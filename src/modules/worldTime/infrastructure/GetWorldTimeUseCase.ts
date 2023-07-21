import { type IWorldTimeRepository } from "../domain/interfaces/IWorldTimeRepository";
import { type WorldTime } from "../domain/models/WorldTime";

export class GetWorldTimeUseCase {
  #worldTimeRepository: IWorldTimeRepository;

  constructor({
    worldTimeRepository,
  }: {
    worldTimeRepository: IWorldTimeRepository;
  }) {
    this.#worldTimeRepository = worldTimeRepository;
  }

  run(...params: string[]): Promise<WorldTime> {
    return this.#worldTimeRepository.get(...params);
  }
}
