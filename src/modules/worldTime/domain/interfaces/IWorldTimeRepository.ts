export interface IWorldTimeRepository {
  get(...params: string[]): Promise<WorldTime>;
  timezone(): Promise<string>;
}
