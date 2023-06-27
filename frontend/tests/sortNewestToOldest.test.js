/**
 * @vitest-environment happy-dom
 */

import { expect, test } from "vitest";
import { sortNewestToOldest } from "../main.js";

const input = [
  {
    date: "2023-01-01",
  },
  {
    date: "2023-02-01",
  },
  {
    date: "2021-12-3",
  },
  {
    date: "2023-06-23",
  },
];

const output = [
  {
    date: "2023-06-23",
  },
  {
    date: "2023-02-01",
  },
  {
    date: "2023-01-01",
  },
  {
    date: "2021-12-3",
  },
];

test("objects are sorted from most recent to oldest date", () => {
  expect(sortNewestToOldest(input)).toEqual(output);
});

const input2 = [
  {
    name: "my",
    date: "2023-01-01",
  },
  {
    name: "name",
    date: "2023-02-01",
  },
  {
    name: "is",
    date: "2023-02-01",
  },
  {
    name: "ped",
    date: "2023-06-23",
  },
];

const output2 = [
  {
    name: "ped",
    date: "2023-06-23",
  },
  {
    name: "name",
    date: "2023-02-01",
  },
  {
    name: "is",
    date: "2023-02-01",
  },
  {
    name: "my",
    date: "2023-01-01",
  },
];

test("objects with the same date should be in the same order", () => {
  expect(sortNewestToOldest(input2)).toEqual(output2);
});
