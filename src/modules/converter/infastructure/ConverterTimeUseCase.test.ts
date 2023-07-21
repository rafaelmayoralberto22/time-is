import { ConverterTimeUseCase } from "./ConverterTimeUseCase";

describe("ConverterTimeUseCase", () => {
  const converter = new ConverterTimeUseCase();

  test("Awesome converter", async () => {
    const result = await converter.run({
      nextZone: "Europe/Madrid",
      dateTime: "2023-07-21T17:18:12.673Z",
    });

    expect(result).toEqual("2023-07-21 07:18:12 CEST");
  });

  test("DateTime is required", async () => {
    try {
      await converter.run({
        nextZone: "Europe/Madrid",
        dateTime: "",
      });
    } catch ({ message }) {
      expect(message).toEqual("DateTime is required");
    }
  });

  test("NextZone is required", async () => {
    try {
      await converter.run({
        nextZone: "",
        dateTime: "2023-07-21T17:18:12.673Z",
      });
    } catch ({ message }) {
      expect(message).toEqual("NextZone is required");
    }
  });
});
