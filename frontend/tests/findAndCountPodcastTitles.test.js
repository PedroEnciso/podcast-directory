/**
 * @vitest-environment happy-dom
 */

import { expect, test } from "vitest";
import { findAndCountPodcastTitles } from "../main.js";

const input = [
  {
    podcastTitle: "JavaScript Jabber",
  },
  {
    podcastTitle: "Syntax - Tasty Web Development Treats",
  },
  {
    podcastTitle: "Syntax - Tasty Web Development Treats",
  },
  {
    podcastTitle: "Syntax - Tasty Web Development Treats",
  },
  {
    podcastTitle: "Syntax - Tasty Web Development Treats",
  },
];

const output = [
  {
    podcastTitle: "JavaScript Jabber",
    count: 1,
  },
  {
    podcastTitle: "Syntax - Tasty Web Development Treats",
    count: 4,
  },
];

test("keeps track of podcastTitles and number of occurances", () => {
  expect(findAndCountPodcastTitles(input)).toEqual(output);
});
