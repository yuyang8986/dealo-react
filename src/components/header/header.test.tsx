import Header from "./index";
import React from "react";
import "@testing-library/jest-dom";
import * as testUtils from "../../utils/test-utils";

describe("Header Componenet Tests", () => {
  test("header items rendering", () => {
    testUtils.render(<Header />);
    const annoucementsLink = testUtils.screen.getByText("Announcements");
    const supportsLink = testUtils.screen.getByText("Support");
    const accountLink = testUtils.screen.getByText("Account");
    expect(annoucementsLink).toBeInTheDocument();
    expect(supportsLink).toBeInTheDocument();
    expect(accountLink).toBeInTheDocument();
  });

  test("hover on user profile area show dialog", () => {
    testUtils.render(<Header />);
    const accountProfileHeader = testUtils.screen.queryByTestId(
      "account-profile-header-id"
    );

    testUtils.fireEvent.mouseOver(accountProfileHeader as Element);

    const accountDialog = testUtils.screen.queryByTestId(
      "account-profile-dialog-id"
    );

    expect(accountDialog).toBeInTheDocument();
  });
});
