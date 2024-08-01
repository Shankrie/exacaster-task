import { expect, it } from "vitest";
import { formatName } from "./formatName";

it("shortens last name to first letter", () => {
  const result = formatName("John", "Doe");
  expect(result).toBe("John D.");
});

it("omits period if last name is single letter", () => {
  const result = formatName("John", "D");
  expect(result).toBe("John D");
});
