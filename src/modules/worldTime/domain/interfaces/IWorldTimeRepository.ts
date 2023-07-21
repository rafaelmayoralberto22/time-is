import { type WorldTime } from "../models/WorldTime";

export interface IWorldTimeRepository {
  get: (...params: string[]) => Promise<WorldTime>;
  timezone: () => Promise<string>;
}
