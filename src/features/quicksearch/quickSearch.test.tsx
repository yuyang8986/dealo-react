import * as testUtils from "../../utils/test-utils";
import QuickSearch from "./index";

describe("quicksearch tests", () => {
  test("render items", () => {
    testUtils.render(<QuickSearch />);

    const content = testUtils.screen.queryByTestId("quicksearch-title-id");
    expect(content).toBeInTheDocument();
  });
});
