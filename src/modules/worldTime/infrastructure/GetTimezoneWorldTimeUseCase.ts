import { type IWorldTimeRepository } from "../domain/interfaces/IWorldTimeRepository";

export class GetTimezoneWorldTimeUseCase {
  #worldTimeRepository: IWorldTimeRepository;

  constructor({
    worldTimeRepository,
  }: {
    worldTimeRepository: IWorldTimeRepository;
  }) {
    this.#worldTimeRepository = worldTimeRepository;
  }

  run(): Promise<string> {
    return this.#worldTimeRepository.timezone();
  }
}
