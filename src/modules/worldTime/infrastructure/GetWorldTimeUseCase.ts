import { IWorldTimeRepository } from "../domain/interfaces/IWorldTimeRepository";

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
