import { test, expect } from "@playwright/test";

test.describe("Request service flow", () => {
  test("completes multi-step form", async ({ page }) => {
    await page.route("**/api/request-service", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ success: true, message: "Request received. We’ll confirm shortly." }),
      });
    });

    await page.goto("/request-service");

    await page.getByLabel("Name").fill("Test User");
    await page.getByLabel("Email").fill("test@example.com");
    await page.getByLabel("Phone").fill("(555) 123-4567");
    await page.getByLabel("Service address").fill("123 Main Street");
    await page.getByLabel("City").fill("Fortville");

    await page.getByRole("button", { name: "Next" }).click();

    await page.getByRole("button", { name: "Select a service" }).click();
    await page.getByRole("option", { name: /Emergency Plumbing/i }).click();
    await page.getByRole("button", { name: "Choose urgency" }).click();
    await page.getByRole("option", { name: /Within the next few days/i }).click();
    await page.getByLabel("Describe the issue").fill("My water heater is leaking and needs service.");

    await page.getByRole("button", { name: "Next" }).click();

    await page.getByLabel("Preferred date").fill("2025-10-31");
    await page.getByRole("button", { name: "Choose an option" }).click();
    await page.getByRole("option", { name: /Phone or email is fine/i }).click();

    await page.getByRole("button", { name: "Submit request" }).click();

    await expect(page.getByText(/Request received/i)).toBeVisible();
  });
});

