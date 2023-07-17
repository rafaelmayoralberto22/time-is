export const camelCase = (str: string) => {
  return str
    .toLowerCase()
    .replace(/([-_][a-z])/g, (ltr) => ltr.toUpperCase())
    .replace(/[^a-zA-Z]/g, "");
};

export const convertKeysToCamelCase = (object: Record<string, unknown>) => {
  return Object.keys(object).reduce(
    (acc, key) => ({ ...acc, [camelCase(key)]: object[key] }),
    {}
  );
};
