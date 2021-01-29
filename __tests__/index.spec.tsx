import React from "react";
import { mount } from "enzyme";
import { Test } from "../pages/components/Test";

describe("Pages", () => {
  describe("Index", () => {
    it("should render without throwing an error", function () {
      const wrap = mount(<Test />);
      expect(wrap.find("div").text()).toBe("Hello Next.js");
    });
  });
});
