import React from "react";
import RecentlyAccess from "./index";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../utils/theme";
import * as testUtils from "../../utils/test-utils";

describe("recent-access tests", () => {
  test("switch tabs content rendering - standards", async () => {
    const { getByText } = testUtils.render(<RecentlyAccess />);
    const standardsTab = getByText("Standards", { exact: false });
    testUtils.fireEvent.click(standardsTab);
    const standardItems = await testUtils.screen.getAllByText("AS-NZS 3800:2020");
    expect(standardItems[0]).toBeInTheDocument();
  });

  test("switch tabs content rendering - collections", () => {
    const { getByText } = testUtils.render(
        <RecentlyAccess />
    );
    const collectionsTab = getByText("Collections");
    testUtils.fireEvent.click(collectionsTab);
    const collectonItem = getByText("Frequently Used");
    expect(collectonItem).toBeInTheDocument();
  });
});
