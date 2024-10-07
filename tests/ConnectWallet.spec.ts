import { expect, test } from "@playwright/test";

import { type WagmiMockFeatures } from "../src/app/wagmiConfig";

declare global {
  interface Window {
    wagmiMockFeatures: WagmiMockFeatures;
  }
}

test("wallet successfully connects", async ({ page }) => {
  await page.goto("/");

  // configure mock provider
  await page.evaluate(() => {
    window.wagmiMockFeatures = {
      connectError: false,
    };
    const event = new Event("wagmiConfigLoaded");
    document.dispatchEvent(event);
  });

  const mockConnectorButton = await page.getByRole("button", {
    name: "Mock Connector",
  });

  await expect(mockConnectorButton).toBeVisible;

  await mockConnectorButton.click();

  await expect(
    page.getByText("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")
  ).toBeVisible();

  // what happens when we get a connect error?
});

test("wallet connection successfully fails", async ({ page }) => {
  await page.goto("/");

  // configure mock provider
  await page.evaluate(() => {
    window.wagmiMockFeatures = {
      connectError: true,
    };
    const event = new Event("wagmiConfigLoaded");
    window.dispatchEvent(event);
  });

  const mockConnectorButton = await page.getByRole("button", {
    name: "Mock Connector",
  });

  await expect(mockConnectorButton).toBeVisible();

  await mockConnectorButton.click();

  await expect(
    page.getByText("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")
  ).toBeVisible();

  // await expect(mockConnectorButton).toBeVisible();

  // what happens when we get a connect error?
});
