describe("first e2e test suite", () => {
  it("should open www.epam.com", async () => {
    const expectedTitle =
      "EPAM | Software Engineering & Product Development Services";

    await browser.url("/");
    await expect(browser).toHaveTitle(expectedTitle);
  });

  it("should open burger menu", async () => {
    await browser.url("/");
    await $(".hamburger-menu__button").click();
    await expect($("//div[@class='os-content']")).toBeDisplayed();
  });

  it("should navigate to Services page", async () => {
    await browser.url("/");
    const links = await $$(".top-navigation__item-link");
    await links[0].click();
    await expect(browser).toHaveTitle("Services | EPAM");
  });

  it("should navigate to careers page", async () => {
    await browser.url("/");
    const links = await $$(".top-navigation__item-link");
    await links[4].click();
    const careerButton = await $("//div[@class='pinned-button']//a");
    await careerButton.click();
    await expect(browser).toHaveTitle(
      "Discover Exciting Job Opportunities | EPAM Careers",
    );
  });

  it("search", async() => {
    await browser.url("/");
    const search = await $(".header-search__button");
    await search.click();
    const searchPanel = await $(".header-search__panel");
    await expect(searchPanel).toBeDisplayed();
  })
});
