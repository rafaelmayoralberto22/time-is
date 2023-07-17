import { GetWorldTimeUseCase } from "../../../modules/worldTime/infrastructure/GetWorldTimeUseCase";
import { AwilixContainer, asClass } from "awilix";
import { WorldTimeRepository } from "../../../modules/worldTime/application/repositories/WorldTimeRepository";
import { BaseService } from "../service/BaseService";

export default function registerContext(containerAwilix: AwilixContainer<any>) {
  containerAwilix.register({
    worldTimeRepository: asClass(WorldTimeRepository),
    baseService: asClass(BaseService),
    worldTimeUseCase: asClass(GetWorldTimeUseCase),
  });
}
