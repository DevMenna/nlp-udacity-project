import { validURL } from "../js/urlChecker";

test("Testing validURL() function", () => {
  expect(validURL("welcome")).toBe(false);
});
