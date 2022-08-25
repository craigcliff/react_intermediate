/**
 *  @jest-environment jsdom
 */

import { expect, test } from "@jest/globals";
import { create } from "react-test-renderer";
import Results from "../Results";

test("renders correctly with no pets", () => {
  const tree = create(<Results pets={[]} />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="search"
    >
      <h1>
        No Pets Found
      </h1>
    </div>
  `);
});
