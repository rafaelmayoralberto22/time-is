export interface IWorldTimeRepository {
  get(...params: string[]): Promise<WorldTime>;
}
