/**
 * @vitest-environment happy-dom
 */

import { compare } from "../main.js";
import { expect, test } from "vitest";

const a = "2023-06-22";
const b = "2022-06-22";
const c = "2023-12-22";
const d = "2023-06-2";

test("compare 2023-06-22 and 2022-06-22 is 1", () => {
  expect(compare(a, b)).toBe(1);
});

test("compare 2022-06-22 and 2023-06-22 is -1", () => {
  expect(compare(b, a)).toBe(-1);
});

test("compare 2023-12-22 and 2023-06-22 is 1", () => {
  expect(compare(c, a)).toBe(1);
});

test("compare 2023-06-22 and 2023-12-22 is -1", () => {
  expect(compare(a, c)).toBe(-1);
});

test("compare 2023-06-22 and 2023-06-2 is 1", () => {
  expect(compare(a, d)).toBe(1);
});

test("compare 2023-06-2 and 2023-06-22 is -1", () => {
  expect(compare(d, a)).toBe(-1);
});

test("compare 2023-06-22 and 2023-06-22 is 0", () => {
  expect(compare(a, a)).toBe(0);
});
