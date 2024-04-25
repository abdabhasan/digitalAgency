import { parseRequestBody } from "@/helpers/parsingHelpers";

describe("parseRequestBody", () => {
  it("should return an empty object for an empty request body", async () => {
    const req = {
      body: (async function* () {})(), // Correctly mocking an async iterable
    };
    const result = await parseRequestBody(req);
    expect(result).toEqual({});
  });

  it("should parse a valid JSON object correctly", async () => {
    const requestBody = JSON.stringify({ key: "value" });
    const req = {
      body: (async function* () {
        yield Buffer.from(requestBody);
      })(),
    };
    const result = await parseRequestBody(req);
    expect(result).toEqual({ key: "value" });
  });

  it("should throw an error for invalid JSON", async () => {
    const req = {
      body: (async function* () {
        yield Buffer.from("invalid json");
      })(),
    };
    await expect(parseRequestBody(req)).rejects.toThrow(SyntaxError);
  });

  it("should handle different data types within the JSON body", async () => {
    const requestBody = JSON.stringify({
      string: "text",
      number: 123,
      bool: true,
      array: [1, 2, 3],
    });
    const req = {
      body: (async function* () {
        yield Buffer.from(requestBody);
      })(),
    };
    const result = await parseRequestBody(req);
    expect(result).toEqual({
      string: "text",
      number: 123,
      bool: true,
      array: [1, 2, 3],
    });
  });

  it("should handle large JSON objects correctly", async () => {
    const largeObject = Array(10000).fill({ key: "value" });
    const requestBody = JSON.stringify(largeObject);
    const req = {
      body: (async function* () {
        yield Buffer.from(requestBody);
      })(),
    };
    const result = await parseRequestBody(req);
    expect(result).toEqual(largeObject);
  });
});
