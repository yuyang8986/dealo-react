import AccessCount from "./index";
import * as testUtils from "../../utils/test-utils";

describe("access count tests", () => {
  test("render items", () => {
    testUtils.render(<AccessCount />);

    const content = testUtils.screen.queryByTestId("access-count-id");
    expect(content).toBeInTheDocument();
  });
});
