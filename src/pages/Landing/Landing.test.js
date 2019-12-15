import React from "react";
import { MemoryRouter } from "react-router-dom";
import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Landing from "./Landing";
import LandingSocials from "./LandingSocials";
import LandingNav from "./LandingNav";

import { SOCIALS } from "../../config/SOCIALS";
import { NAVIGATION } from "../../config/NAVIGATION";

configure({ adapter: new Adapter() });

describe("Landing", () => {
  it("renders social and nav elements", () => {
    const wrapper = mount(
      <MemoryRouter
        initialEntries={[
          { hash: "", pathname: "/", search: "", state: undefined }
        ]}
      >
        <Landing />
      </MemoryRouter>
    );
    expect(wrapper).toContainMatchingElement(LandingSocials);
    expect(wrapper).toContainMatchingElement(LandingNav);
  });

  it("renders 2 socials", () => {
    const wrapper = mount(<LandingSocials socials={SOCIALS}></LandingSocials>);
    expect(wrapper).toContainMatchingElements(2, "i");
  });

  it("renders 4 hexagons", () => {
    const wrapper = mount(
      <MemoryRouter
        initialEntries={[
          { hash: "", pathname: "/", search: "", state: undefined }
        ]}
      >
        <LandingNav navigation={NAVIGATION}></LandingNav>
      </MemoryRouter>
    );
    expect(wrapper).toContainMatchingElements(4, ".hexagon");
  });
});
