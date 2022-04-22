import { Collection } from "../../models/Collection";
import * as testUtils from "../../utils/test-utils";
import CollectionItem from "./collection-item";

describe("collection-item tests", () => {
  test("render item", () => {
    const item: Collection = {
      id: 1,
      name: "Frequently Used",
      creator: "You",
      lastUpdated: "15/08",
      items: [
        {
          id: 1,
          title: "AS-NZS 3800:2020",
          description:
            "Electrical Equipment for explosive atmopheres- Repair and overhaul (IEC 60079-19:2015)",
          publishDate: "17/07/1968",
          type: "Standard",
          status: "Current",
        },
        {
          id: 2,
          title: "AS-NZS 3800:2020",
          description:
            "Electrical Equipment for explosive atmopheres- Repair and overhaul (IEC 60079-19:2015)",
          publishDate: "17/07/1968",
          type: "Standard",
          status: "Current",
        },
      ],
    };
    testUtils.render(<CollectionItem item={item} />);

    const content = testUtils.screen.queryByTestId(1);

    expect(content).toBeInTheDocument();
    expect(content).toHaveTextContent("Frequently Used");
  });
});
