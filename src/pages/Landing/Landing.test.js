import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Landing from "./Landing";

configure({ adapter: new Adapter() });

describe("Landing", () => {
  const wrapper = shallow(<Landing />);

  it("renders 2 socials", () => {
    expect(wrapper).toContainMatchingElements(2, "i");
  });
  it("renders 4 hexagons", () => {
    expect(wrapper).toContainMatchingElements(4, ".hexagon");
  });
});
