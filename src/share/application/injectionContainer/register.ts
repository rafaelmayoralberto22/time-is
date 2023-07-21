import { asClass, type AwilixContainer } from "awilix";
import { ConverterTimeUseCase } from "../../../modules/converter/infastructure/ConverterTimeUseCase";
import { WorldTimeRepository } from "../../../modules/worldTime/application/repositories/WorldTimeRepository";
import { GetTimezoneWorldTimeUseCase } from "../../../modules/worldTime/infrastructure/GetTimezoneWorldTimeUseCase";
import { GetWorldTimeUseCase } from "../../../modules/worldTime/infrastructure/GetWorldTimeUseCase";
import { BaseService } from "../service/BaseService";

export default function registerContext(
  containerAwilix: AwilixContainer<any>
): void {
  containerAwilix.register({
    worldTimeRepository: asClass(WorldTimeRepository),
    baseService: asClass(BaseService),
    worldTimeUseCase: asClass(GetWorldTimeUseCase),
    timezoneWorldTimeUseCase: asClass(GetTimezoneWorldTimeUseCase),
    converterTimeUseCase: asClass(ConverterTimeUseCase),
  });
}
