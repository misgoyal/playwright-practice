import { test, expect } from "@playwright/test";

test.describe("Blog", () => {
    test("Open HomePage and verify the title", async ({ page }) => {

        // Open URL
        await page.goto("/");

        // Verify title
        await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns");

        // Click Blog
        await page.locator('#zak-primary-menu >> a[href="https://practice.sdetunicorns.com/blog/"]').click();
        await page.waitForURL('**/blog/')
        // Get recent posts
        const recentPosts = page.locator('#recent-posts-3 ul li a');
        const count = await recentPosts.count();

        console.log(`Total posts: ${count}`);

        for (let i = 0; i < count; i++) {
            const postText = await recentPosts.nth(i).textContent();

            if (postText) {
                const trimmed = postText.trim();

                console.log({
                    post: trimmed,
                    length: trimmed.length
                });
            }
        }
    });
});

