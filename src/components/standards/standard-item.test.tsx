import { IStandardItem } from "../../models/StandardItem";
import * as testUtils from "../../utils/test-utils";
import StandardsItem from "./standards-item";

describe("standard item tests", () => {
  test("render item", () => {
    const item: IStandardItem = {
      id: 1,
      title: "AS-NZS 3800:2020",
      description:
        "Electrical Equipment for explosive atmopheres- Repair and overhaul (IEC 60079-19:2015)",
      publishDate: "17/07/1968",
      type: "Standard",
      status: "Current",
    };

    testUtils.render(<StandardsItem standardItem={item} />);
    
    const content = testUtils.screen.queryByTestId(1);
    expect(content).toBeInTheDocument();
    expect(content).toHaveTextContent("AS-NZS 3800:2020");
  });
});
