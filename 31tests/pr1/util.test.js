const puppeteer = require("puppeteer");
const { generateText, checkAbdGenerate } = require("./util");

// юнит тест
test("should output name and age", () => {
  const text = generateText("Bob", 29);
  expect(text).toBe("Bob (29 years old)");
});

// интеграционній тест
test("should geberate valid text output", () => {
  const text = checkAbdGenerate("Tom", 30);
  expect(text).toBe("Tom (30 years old)");
});

// end to end test (user interface test)
test("should create an element with text and correct class", async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ["--window-size=1920,1080"],
  });
  const page = await browser.newPage();
  await page.goto("file:///home/artem/studing/maxjs/31tests/pr1/index.html");
  await page.click("input#name");
  await page.type("input#name", "Bob");
  await page.click("input#age");
  await page.type("input#age", "30");
  await page.click("#btnAddUser");
  const finalText = await page.$eval(".user-item", (el) => el.textContent);
  expect(finalText).toBe("Bob (30 years old)");
}, 10000);
