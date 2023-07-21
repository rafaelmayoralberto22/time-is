import { type WorldTime } from "../../modules/worldTime/domain/models/WorldTime";

export const camelCase = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/([-_][a-z])/g, (ltr) => ltr.toUpperCase())
    .replace(/[^a-zA-Z]/g, "");
};

export const convertKeysToCamelCase = (
  object: Record<string, unknown>
): WorldTime => {
  return Object.keys(object).reduce(
    (acc, key) => ({ ...acc, [camelCase(key)]: object[key] }),
    {}
  ) as WorldTime;
};
